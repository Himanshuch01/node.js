const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(body.urlencoded({extended: true}));

app.post('/details', (req,res)=> {
    const name = req.body.name;
    const age = req.body.age;

    res.send('your name is ${name}and your age is ${age}');

});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
// create an express server by using bodyparser that accepts form data like product id, name, number
