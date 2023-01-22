let mongoose=require('mongoose')

let urlSchema=new mongoose.Schema({
    longUrl:{
        requied:true,
       type:String
    },
    uniqueId:{
        requied:true,
        type:String
    }
})


module.exports=mongoose.model('url',urlSchema)