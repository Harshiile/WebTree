"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const generateToken = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET || "");
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET || "");
};
exports.verifyToken = verifyToken;
