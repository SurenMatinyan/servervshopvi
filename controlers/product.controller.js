const productModel = require("../models/product.model");
const jwt = require('jsonwebtoken');
const fs = require("fs");
const { IncomingForm } = require('formidable');
const uniqid = require('uniqid');
//

class product {
    static async getProduct(req, res){
       const { page }  = req.query;
       let skip = 1;
       page == 1 ? skip = 0 : skip = (5 * page) - 5;
       const getProduct = await productModel.find().skip(skip).limit(5);
       res.json(getProduct);
    }

    static async getProductItem(req, res){
       const itemId = req.query.id; 
       const getItem = await productModel.findOne({_id: itemId});
       res.json(getItem);
    }

    static async createProduct(req, res){
      const form = new IncomingForm();
      const n =  form.parse(req, (err, fields, files) => {
         const imgurl = "./public/images/" + uniqid() + ".jpg";
         const data = { ...fields, imgURL: imgurl.slice(1)}
         fs.rename(files.imgURL.path, imgurl, err => { err ? err.message : null });
         async function n(data){
            const newPorduct = await productModel.create(data);
         }
         n(data);
         
       });
       res.send("created");
     
   }
     
   

}


 


module.exports = product;


 // if(req.body.category){
         
        //
        
        //console.log(newPorduct);
       // return res.json({message: "create new product"});

      // }