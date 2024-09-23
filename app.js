const express=require('express');
const mongoDB=require('./DBConnection.js')
const staticRoute=require('./Routes/staticRoute.js');
const urlRoutes=require('./Routes/urlRoutes.js');
const userRouter = require('./Routes/userRoute.js');
const app=express();
const port=3000;

mongoDB('mongodb://127.0.0.1:27017/url_shortener')
.then(()=>console.log('DB Connected Successfully'));


// set default view engine
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.resolve('./Views'))

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use('/',staticRoute);
app.use('/',urlRoutes)
app.use('/user',userRouter)




app.listen(port,()=>console.log('server started successfully')
)