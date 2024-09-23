const express=require('express');
const routes=express.Router();

// import API End Points
const {
    handleCreateShortenURL,
    handleRedirectURL,

}=require('../Controllers/urlC.js')

routes.post('/url',handleCreateShortenURL);
routes.get('/:id',handleRedirectURL);

module.exports=routes;

