const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use((req,res,next)=> {
    const start = Date.now();
    res.on('finish',()=>{
        const timetaken = Date.now() - start;
        console.log('${req.method} ${req.url} took ${timetaken} ms');

    });
    next();

});

app.post('/login',(req,res)=> {
    
})