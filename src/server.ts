import express, { request, response } from "express";
import "./database";
import { route } from "./router";

const app = express();
app.use(express.json());

app.use(route);

app.listen(3333, () => console.log("Server is running on port 3333"));
