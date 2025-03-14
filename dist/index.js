"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.listen(PORT, () => console.log(`Server is running on \x1b[34mhttp://localhost:${PORT}\x1b[0m`));
