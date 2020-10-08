const mongoose=require ('mongoose')
const validator =require('validator')
mongoose.connect('mongodb+srv://admin:hNqTDyG9rNNQmzc5@iosd.oqv9i.mongodb.net/test',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true,useFindAndModify:false})

const ap=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        trim:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error('Enter valid email')
            }
        }
    },
    number:{
        type:String,
        required:true,
    
    },
    message:{
        type:String,
        required:true

    }
},{
    timestamps:true
})
// const ap=new target({
//     desc:'New task',
    
// })

ap.pre('save',async function(op){

    const m=this
    //if(m.isModified(password))
console.log('apple12')
    op()
})


const target= mongoose.model('target',ap)
// ap.save().then((ap)=>
//     {
//         console.log(ap)

//     }).catch((error)=>
//     {
//         console.log(error)

//     })

module.exports=target