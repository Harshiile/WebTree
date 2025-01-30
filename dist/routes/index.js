"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const { Router } = require("express");
const router = Router();
router.post('/login', controllers_1.loginController);
router.post('/signup', controllers_1.signUpController);
exports.default = router;
