import express, { Express, Request, Response } from "express";
import dotenvFlow from "dotenv-flow";
dotenvFlow.config()

const PORT = process.env['PORT'];


const app: Express = express();

//* Test if the server is running
app.get('/', (req: Request, res: Response) => {
    res.send('Express server Initialized');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});