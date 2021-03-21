const productModel = require("../models/product.model");
const jwt = require('jsonwebtoken');
const fs = require("fs");
const { IncomingForm } = require('formidable');
const uniqid = require('uniqid');



class product {
    static async getProduct(req, res){
       try{
         const category =  req.params.category;
         const { page, child, priceMin, priceMax }= req.query;
         const pat = [category];
         child && pat.push(child);
         const find = {category: pat, price: {$gte: priceMin || 0, $lte: priceMax || 999999} }
         let skip = 1;
         const limit = 15;
         page == 1 ? skip = 0 : skip =  (limit * page) - limit;
         const caunt = await productModel.countDocuments(find);
         const getProduct = await productModel.find(find).skip(skip).limit(limit);
         console.log(getProduct)
         res.status(200).json({ status: 0,  caunt, getProduct });
       }
       catch(err){
         console.log(err.message);
         res.status(500).json({status: 1, message: "error 500"});
       }
       
    }

    static async getProductItem(req, res){
       const itemId = req.params.id; 
       const getItem = await productModel.findOne({_id: itemId});
       res.status(200).json(getItem);
    }


    static async createProduct(req, res){
       
      const form = new IncomingForm();
      form.multiples = true
     

      const n = form.parse(req, async (err, fields, files) => {
         
         if( fields && files  ){
            const imgArr = [];
            const imgIconArr = [];
            files.img.map(el => {
               let uniq = uniqid();
               let imgurl = `./public/images/${uniq}.jpg`;
               imgArr.push(`/images/${uniq}.jpg`)
               fs.rename(el.path, imgurl, err=> err && console.error(err.message));
            })
            files.imgIcon.map(el => {
               let uniq = uniqid();
               let imgurl = `./public/images/iconImg/${uniq}.jpg`;
               imgIconArr.push(`/images/iconImg/${uniq}.jpg`)
               fs.rename(el.path, imgurl, err=> err && console.error(err.message));
            })
            const data = { ...fields, imgURL: imgArr[0], option: { img: [ ...imgArr ], iconImg: [ ...imgIconArr ] } }
            const newPorduct = await productModel.create(data);
            
         }
        
       });
       res.send("created");
     
   }

   static async getNewsProduct(req, res){
      const newsMan = await productModel.find({category: "man"}).limit(5);
      const newsWoman = await productModel.find({category: "woman"}).limit(5);
      const newsChildren = await productModel.find({category: "children"}).limit(5);
      res.json({status: 0, newsMan, newsWoman, newsChildren});
   }
     
   

}

 


module.exports = product;


