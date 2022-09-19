const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const port = 3500;

app.get('/en/quide/' , (req , res) => {


let person1 = {
    id:1,
    name:"reza",
    "mobile":091231212
}
let person2 = {
    id:2,
    name:"shayan",
    "mobile":192839123
}
let person3 = {
    id:3,
    name:"ahmad",
    "mobile":19238290
} 


"this is change1"


if (req === 1) {
    res.send(person1)
    
}

if (req === 2) {
    res.send(person2)
    
}

if (req === 3) {
    res.send(person3)
    
}


})



app.listen(port, async ()=>{
    console.log("hi im here");
    await mongoose.connect('mongodb://localhost:27017/test');
    

})

