const express = require('express');
const router  = express.Router();


//@route: route for API/auth
//@desc:  Test route for auth
//auth:   Public
router.get('/', (req,res) => {
    res.send('test route for auth');
})

module.exports = router;

