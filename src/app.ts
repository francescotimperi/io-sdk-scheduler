import  express from 'express';
import AppRouter from "./routes/router";
import cors from 'cors';

class App {
    public express

    constructor () {
        this.express = express();
        this.express.use(express.json());
        this.express.use(cors());
        this.mountRoutes();
    }

    private mountRoutes (): void {
        const appRouter = new AppRouter().router;
        this.express.use('/', appRouter);
    }
}

export default new App().express;
