
const { query } = require('express');
const productModel=require('../models/productsModel.js');

const getAllProducts = async (req,res)=>{
    const {sort='price',page=1,pageSize=3,fields='-images', ...q}=req.query;
    const fieldStr=fields.split(',').join(' ');
    
    let query= productModel.find(q);
    const skip=pageSize*(page-1);
    const limit=3;
    query = query.sort(sort.split(',').join(' '));
console.log(q,sort);
    

    query=query.skip(skip).limit(pageSize);
    query=query.select(fieldStr);
    const products=await query;
    const totalResults= await productModel.countDocuments();
    // console.log(data);
res.json({
    status:'success',
    result:products.length,
    data:{
        products,
    },
    totalResults: totalResults,
    pageSize: pageSize,
    page: page,

})
}

const addProducts=async(req,res)=>{
    try{
const data=await productModel.create(req.body)
console.log(data);
    res.json({
        status:'false',
        results: 1,
        data:{
            products:data,
        }
    })
} catch(err){
        console.log(err);
        res.json({
            status:'fail',
            message: JSON.stringify(err)
        })
    }

}

const replaceProduct=async (req,res)=>{
    try{
    const reqID= req.params.id;
    const data= {...req.body, reqID};
    const result=await productModel.findOneAndDelete( {_id:reqID}, data);
    res.json({
        status:'false',
        data:{
            products:result,
        }
    });
}catch(err){
    console.log(err);
    res.json({
        status:'fail',
        message: JSON.stringify(err)
    })
}
}

const deleteProduct= async(req, res)=>{
    try{
        const reqID= req.params.id;
        const data= {...req.body, reqID};
        const result=await productModel.findOneAndRemove( {_id:reqID}, data);
        res.json({
            status:'false',
            results: 1,
            data:{
                products:result,
            }
        });
    }catch(err){
        console.log(err);
        res.json({
            status:'fail',
            message: JSON.stringify(err)
        })
    }
    }


module.exports={
    getAllProducts,
    addProducts,
    replaceProduct,
    deleteProduct,
}