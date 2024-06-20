import express,{ Express } from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes";
import mongoose from "mongoose";

const app:Express=express();
const server=http.createServer(app);

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("PORT",3000);
app.set("BASE_URL","localhost");
    
app.use("/api/v1/",router)

const mongoURI=process.env.MONGO_DB_URI ;

if(!mongoURI){
    console.error("MongoDB URL not defined");
    process.exit(1);
}
mongoose.connect(mongoURI,{}).then(()=>{
    console.log("MongoDb is connected");
})
.catch((error)=>{
    console.log(error);
})

try{
    const port:Number=app.get("PORT");
    const baseUrl:String=app.get("BASE_URL");
    server.listen(port,():void=>{
        console.log("Server is Running");   
    });
} catch(error) {
    console.log(error);
}

export default server;