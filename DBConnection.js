const mongoose=require('mongoose');

function mongoDB(url){
    return mongoose.connect(url);
}

module.exports=mongoDB;