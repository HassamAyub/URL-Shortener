const URL=require('../Models/urlModel.js')
const shortid=require('shortid')

// Create new shorten URL API
async function handleCreateShortenURL(req,res) {
    const body=req.body;
    if(!body) return res.status(400).json({Error:'incomplete data'});
    console.log(body);
    
    try {
        
        const shortenid=shortid.generate();
        const newURL=await URL.create({
            shortenUrl:shortenid,
            OrignalUrl:body.OrignalUrl,
            clicks:[],
        })
        console.log('part2',newURL);
        const urlAddress='localhost:3000/'+shortenid;
        return res.render('home',{
            id:urlAddress
        })
        
    } catch (error) {
        return res.status(500).json({Error:error})
    }
}



// redirect shorten to orignal
async function handleRedirectURL(req,res) {
    const id=req.params.id;
    
    try {
        const urlEntity= await URL.findOne({shortenUrl:id});
        if(urlEntity){
            await URL.findOneAndUpdate({shortenUrl:id},{$push:{
                clicks:{timestamp:Date.now()}
            }})
            return res.redirect(urlEntity.OrignalUrl);
        }else{
            return res.status(400).json({error:'incomplete or invalid data'})
        }
        
    } catch (error) {
        console.log(`server side error`);
        return res.status(500).json({error:error})
    }

}

module.exports={
    handleCreateShortenURL,
    handleRedirectURL,
}