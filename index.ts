import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import router from './routes';
dotenv.config()

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // Just for testing
app.use(router)
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => console.log(`Server is running on \x1b[34mhttp://localhost:${PORT}\x1b[0m`));