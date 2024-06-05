//install dependency
const express = require('express');
const usersMiddleware = require('./api/users');
const authMiddleWare = require('./api/auth');
const postsMiddleWare = require('./api/posts')
const profileMiddleWare = require('./api/profile');

//import db connection method
const connectDb = require('./config/db');

connectDb();

//initialise express, think of it as server side software to handle web requests. 
//we are actually building a webapp.
//app = application
const app = express();

//app.get() method defines the route that listens to HTTP get requests on the 
//specified path. In this case: '/' which is root url of our application
app.get('/', (req,res) => {
    res.send('API is running');
});

// mount global middleware to parse the request body
app.use(express.json())


app.use("/api/users", usersMiddleware);
app.use("/api/posts", postsMiddleWare);
app.use("/api/profile", profileMiddleWare);
app.use("/api/auth", authMiddleWare);

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> {
    console.log(`server started on PORT ${PORT}`);
});
