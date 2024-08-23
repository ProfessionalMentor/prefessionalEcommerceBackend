import express from "express";
import path from "path";
import {fileURLToPath} from "url";
const app = express();

const port = process.env.PORT || 3000;


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); 


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));




//routes
import router from "./routes/user-routes.js";
import authrouter from "./routes/auth-routes.js";

app.use(router)
app.use(authrouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app