"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpController = exports.loginController = void 0;
const bcrypt_1 = require("bcrypt");
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, bcrypt_1.hash)(password, 10);
});
const decryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    // return await compare(password);
});
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const hashedPassword = yield encryptPassword(password);
    const decryptPassword = "---";
    if (decryptPassword == hashedPassword) {
        // generate cookie
        res.json({
            statusCode: 200,
            message: "Login Successfully"
        });
    }
    else {
        res.json({
            statusCode: 401,
            message: "Password incorrect"
        });
    }
    /*
        1. decrypt password
        2. checks with given password
        3. if false => return with message
        4. if true => generate cookie & let user go : payload={userId,email}
    */
});
exports.loginController = loginController;
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const hashedPassword = yield encryptPassword(password);
    // generate cookie
    res.json({
        statusCode: 200,
        message: "Signup Successfully"
    });
});
exports.signUpController = signUpController;
