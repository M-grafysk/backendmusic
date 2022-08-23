const express = require('express');
const app = express();
const cors = require('cors');


const port=5000;

const userRouter=require('./routers/userRouter');
const musicRouter=require('./routers/musicRouter');
const util=require('./routers/util');

// to allow ewact frontend to access the backend
app.use(cors({origin:['http://localhost:3000']}))
app.use(express.json())

// middleware
app.use(express.json());
app.use('/user',userRouter);
app.use('/music',musicRouter);
app.use('/music',util);


//creating a route or endpoint 
app.get('/',(req,res)=>{
    res.send('requested accepted on /');
} )
app.get('/home',(req,res)=>{
    res.send('request at home');
} )

app.listen(port, ()=>{
    console.log('express api server started');
})