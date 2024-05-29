//install dependency
const express = require('express');

//initialise express, think of it as server side software to handle web requests. 
//we are actually building a webapp.
const app = express();

//app.get() method defines the route that listens to HTTP get requests on the 
//specified path. In this case: '/' which is root url of our application
app.get('/', (req,res) => {
    res.send('API is running');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> {
    console.log(`server started on PORT ${PORT}`);
});
