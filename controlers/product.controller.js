const productModel = require("../models/product.model");
const jwt = require('jsonwebtoken');
const fs = require("fs");
const { IncomingForm } = require('formidable');
const uniqid = require('uniqid');
//

class product {
    static async getProduct(req, res){

       try{
         const category =  req.params.category;
         const  page  = req.query.page || "1";
         let skip = 1;
         const limit = 15;
         page == 1 ? skip = 0 : skip =  (limit * page) - limit;
         const caunt = await productModel.countDocuments({category});
         const getProduct = await productModel.find({category}).skip(skip).limit(limit);
         res.json({ status: 0,  caunt, getProduct });
       }
       catch(err){
         console.log(err.message);
         res.json({status: 1, message: "error 500"});
       }
       
    }

    static async getProductItem(req, res){
       console.log("req")
       const itemId = req.params.id; 
       const getItem = await productModel.findOne({_id: itemId});
       res.json(getItem);
    }


    static async createProduct(req, res){
      const form = new IncomingForm();
      const n = form.parse(req, (err, fields, files) => {
         const uniq = uniqid();
         const imgurl = `./public/images/${uniq}.jpg`;
         const data = { ...fields, imgURL: `/images/${uniq}.jpg`}
         fs.rename(files.imgURL.path, imgurl, err => { err ? err.message : null });
         async function n(data){
            const newPorduct = await productModel.create(data);
         }
         n(data);
       });
       res.send("created");
     
   }
     
   

}

/**/
 


module.exports = product;


