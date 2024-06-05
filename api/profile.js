const express = require('express');

const router = express.Router();


//@route API/profile
//@desc  Test route for profile
//@auth  Public
router.get('/',(req,res) => {
    res.send('Test route for profile');
})

module.exports = router;