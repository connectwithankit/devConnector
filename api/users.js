const express = require('express');
const { check, validationResult } = require('express-validator');
const {} = require('gravator')
const router = express.Router();
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');

//@route POST api/users
//@desc user post
//@access Public

const userValidationRules = [
    check('name','name is required').not().isEmpty(),
    check('email','email should be present').isEmail(),
    check('password','password should be more than 5 characters').isLength({min:5}),
    check('password','password should be less than 10 characters').isLength({max:10})
];

router.post('/', userValidationRules, async (req,res) => {
    console.log("request body",req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }

    try{
        const { name, email, password } = req.body;
        
        let user = await User.findOne({email});
        if(user){
         return res.status(400).json({errors: [{message: 'user already registered'}]});
        }

        //get users avatar
        const avatar = gravatar.url(email,{
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });

        //hash pwd through bcrypt
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();
        
        return res.send('User registered');

    }catch(error){
        console.error(error.message);
        res.status(500).send('server error');
    }
})

module.exports = router;