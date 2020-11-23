const express=require('express')
const rout=new express.Router()
const path=require('path')

const publicdir=path.join(__dirname,'../../public')

rout.get('/about',async (req,res)=>
{
    try{
        res.sendFile(path.join(publicdir+ '/about/index.html'));
    }
    catch(e)
    {
        res.status(401).send(e)
    }
})
module.exports=rout