const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3000, ()=>{
    console.log('The Server is On');
});



//Use required express middlewares for incoming requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());

//Create Get route that sends welcome message in response to incoming requests
app.get('/',(req,res)=>{
    res.send("Hello World");
});
