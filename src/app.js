import express from "express";
import v1Router from './routers/v1.router.js';
import v2Router from './routers/v2.router.js';

const PORT = 3000;
//khởi tạo app Express
const app = express();

// Khai bao route



// // cach 3 :

// const v3Router = express.Router();

// v3Router.get("/v3/posts", (req,res) => {
//     res.end("Get Posts");
// });

// v3Router.post("/v3/posts", (req,res) => {
//     res.end("Get Posts");
// });

// app.use("/3", v3Router); // /v3/v3/posts

app.use("/", v1Router);
app.use("/", v2Router);


app.use(express.static("public"));

app.use((req, res, next)=> {
  console.log("App - Level Middleware 01");
  next();
})

app.get(
    "/test",
    (req, res ,next) =>{
        console.log("Middleware 01 ");
        next();
    } ,
    (req, res , next) => {
        console.log("Middleware 02 ");
        next();
    },
    (req, res) =>{
        console.log("handler");
        res.end("Handler");
    }
)
//Run app Express
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});