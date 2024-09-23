const mongoose=require('mongoose');

const urlSchema=new mongoose.Schema({
    shortenUrl:{
        type:String,
        unique:true,
    },
    OrignalUrl:{
        type:String,
        required:true,
    },
    clicks:[{
        timestamp:{type:Number}
    }],
    // userid:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'user'
    // }
},{timestamps:true});

const URL=mongoose.model('url3',urlSchema);

module.exports=URL;