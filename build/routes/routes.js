"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = __importDefault(require("./users.routes"));
const tweet_routes_1 = __importDefault(require("./tweet.routes"));
const hello_routes_1 = __importDefault(require("./hello.routes"));
const router = (0, express_1.Router)();
router.use('/hello', hello_routes_1.default);
router.use('/user', users_routes_1.default);
router.use('/tweet', tweet_routes_1.default);
exports.default = router;
