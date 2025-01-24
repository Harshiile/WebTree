import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});