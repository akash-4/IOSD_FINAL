const express=require('express')
const rout=new express.Router()
const User=require('../models/main')


rout.post('/op',async (req,res)=>
{
    console.log(req.body)
    const user=new User(req.body)
    try{
        //console.log('12')
        await user.save()
       // console.log('apple')
        res.status(201).send('done')
    }
    catch(e)
    {
        res.status(401).send(e)
    }
})
module.exports=rout