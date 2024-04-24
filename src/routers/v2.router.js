import express from 'express';

const router = express.Router();


router.
  route("/v2/posts")
  .get((req, res) => {
     res.end("Get Posts");
  })
  .post((req, res) => {
    res.end("Post Posts");
  });

  export default router;