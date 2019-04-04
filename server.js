const express = require('express');
const app = express();

/* this will solve the propblems of the cors*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/users',(req,res,next)=>{
    res.json([
        {
            id:1,
            username:'francis'
        },
        {
            id:2,
            username:'steve'
        }
    ])
})

app.get('/api/cars',(req,res,next)=>{
    res.json([
        {
            id:1,
            brand:'ford'
        },
        {
            id:2,
            brand:'nissan'
        }
    ])
})





const port = process.env.PORT || 8080;

app.listen(port)
