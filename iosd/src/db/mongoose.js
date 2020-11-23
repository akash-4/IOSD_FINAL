const mongoose=require ('mongoose')


mongoose.connect('mongodb+srv://'+process.env.mongo+'@iosd.oqv9i.mongodb.net/test',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true,useFindAndModify:false})

