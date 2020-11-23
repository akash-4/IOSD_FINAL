const express=require('express')
const path=require('path')

const app=express()

const rout=require('./routes/main')
const homeRoute=require('./routes/home')
const aboutRoute=require('./routes/about')
const teamRoute=require('./routes/team')
const announcementRoute=require('./routes/announcement')
const contactRoute=require('./routes/contact')
const publicdir=path.join(__dirname,'../public')


app.use(express.json())
app.use(rout)
app.use(homeRoute)
app.use(aboutRoute)
app.use(teamRoute)
app.use(announcementRoute)
app.use(contactRoute)

app.use(express.static(publicdir))

const port=process.env.PORT||3000
app.listen(port,()=>
{
    console.log(`Server up is on port ${port}`)

})