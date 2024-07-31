const express = require('express');

const app = express();
const PORT = 3007

app.get('/',(req,res)=>{
    res.send('Welcome to WhatsApp backend')
})
app.listen(PORT, () =>{
    console.log(`Server on running port ${PORT}`);
})