"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    if (req.cookies.user)
        next();
    res.redirect('/login');
};
exports.authMiddleware = authMiddleware;
