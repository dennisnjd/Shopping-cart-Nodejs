var db = require('../config/connection')

module.exports={

    addProduct:(product)=>{
        console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
            console.log("Succesfull");
            console.log(data);
           
        })
    },
    
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products= await db.get().collection('product').find().toArray()
            resolve(products)
        })
    }
}