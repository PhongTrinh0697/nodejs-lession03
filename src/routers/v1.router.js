import express from 'express';

const router = express.Router();

router.use((req, res , next) =>{
    console.log("V1 Router Middleware");
    next();
})

// khai báo router

router.get("/v1/posts", (req,res) => {
    res.end("Get Posts");
});

// Khai bao route cho path :/v1/posts - POST
router.post("/v1/posts", (req, res) => {
    res.end("Create Post");
});

// Khai bao route cho path :/v1/posts/:id -GET
router.get("/v1/posts/:id", (req, res) => {
    const params = req.params;
    const id = params.id;
    res.end("Get Post" + id);
});

router.get("/v1/posts/*"),(req, res) => {
   
    res.end("Get Post");
}

//Khai bao route update
router.put("/v1/posts/:id", (req, res) => {
    const params = req.params;
    const id = params.id;
    res.end("Update Post" + id);
});

////Khai bao route delete
router.delete("/v1/posts/:id", (req, res) => {
    const params = req.params;
    const id = params.id;
    res.end("Delete Post" + id);
});

export default router;

