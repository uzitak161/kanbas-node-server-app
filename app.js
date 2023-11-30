import express from 'express'
import session from "express-session";
import Hello from "./hello.js"
import Lab5 from './Lab5.js'
import cors from "cors";
import CourseRoutes from "./courses/routes.js"
import ModuleRoutes from "./modules/routes.js"
import AssignmentRoutes from "./assignments/routes.js"
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";



mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(
    session(sessionOptions)
);


app.use(express.json());
UserRoutes(app);


CourseRoutes(app)
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app)
app.listen(4000)
