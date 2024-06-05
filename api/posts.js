const express = require('express');
const router = express.Router();

//@route API/posts
//@desc  test route for posts
//@auth  PUBLIC
router.get('/', (req,res)=>{
    res.send('Test route for posts');
})

module.exports = router;