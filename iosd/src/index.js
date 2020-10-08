const express=require('express')
const path=require('path')
const http=require('http')
const rout=require('./routes/main')
const port=process.env.PORT||3000
const publicdir=path.join(__dirname,'../public')
const app=express()

app.use(express.json())
app.use(rout)

app.use(express.static(publicdir))
app.listen(port,()=>
{
    console.log('Server up is on port' + port)

})