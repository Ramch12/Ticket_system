import express from "express";
import router from "./router/route.js";
import dotenv from 'dotenv'
import cors from 'cors'
const app = express();
dotenv.config({path:"./config/.env"});
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
