const mongoose=require('mongoose');

// const userSchema=mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: email,
//         required: true,
//         unique: true

//     },
    
    
// })


// const userModel=mongoose.model('User', userSchema);



 const testUser=new userModel({
        name:'Kanchan Sagar',
        email: 'kanchan@gmail.com',
    });
    const testUser1=new userModel({
        name:'Kanchan',
        email: 'sagar@gmail.com',
    });
    const testUser2=new userModel({
        name:'Sagar',
        email: 'kanchansagar@gmail.com',
    });
    const testUser3=new userModel({
        name:'Saurabh',
        email: 'saurabh@gmail.com',
    });
    
    testUser.save().then((res)=>{
    console.log(res)
    })
    testUser1.save().then((res)=>{
    console.log(res)
    })
    testUser2.save().then((res)=>{
    console.log(res)
    })
    testUser3.save().then((res)=>{
    console.log(res)
    })





    const reviewSchema=mongoose.Schema({
    review:{
        type: String,
        required: true
    },
    ratings:{
        type: number

    },
    createdOn:{
        type: date,
        default: new Date()
    }, 
    updatedOn:{
        type: date,
        default: new Date()
    }
            
            
})


const testReview=new userModel({
    review:'Good',
    ratings: 4.5,
    createdOn:12/2/1998,
    updatedOn:19/4/2024
});
const testReview1=new userModel({
    review:'bad',
    ratings: 2.1,
    createdOn:12/2/1998,
    updatedOn:19/4/2024
});
const testReview2=new userModel({
    review:'okay',
    ratings: 3.0,
    createdOn:12/2/1998,
    updatedOn:19/4/2024
});
const testReview3=new userModel({
    review:'fine',
    ratings: 3.5,
    createdOn:12/2/1998,
    updatedOn:19/4/2024
});
        
        
// const reviewModel=mongoose.model('Products', reviewSchema);

// module.exports={
//     userModel,
//     reviewModel
// }
