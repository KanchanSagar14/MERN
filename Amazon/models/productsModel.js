const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    // title: String,
    title:{
        type: String,
        unique: true,
        required: true,
    },
    // price: Number,
    price:{
        type: Number,
        required: true,

    },
    description: String,
    images: [String],
    createdAt:{
        type: Date,
        default: new Date(),
    },
    updatedAt:{
        type: Date,
        default: new Date(),
    }
    
})

const productModel=mongoose.model('Products', productSchema);

module.exports=productModel;

// const testProduct=new productModel({
//     title:'Titan Watch',
//     price: 1000,
// });

// testProduct.save().then((res)=>{
// console.log(res)
// })