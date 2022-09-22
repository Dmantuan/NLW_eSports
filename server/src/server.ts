import express from 'express';
import { router } from './routes';

const app = express();
const cors = require('cors');

app.use(
    cors ({
        origin: "http://127.0.0.1:5173"
    })
);
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!!"))