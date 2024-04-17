const fsPromises=require("fs/promises");



const getAllProducts=async(req, res)=>{
    // const data= fs.readFileSync('./data.json', 'utf-8');
    const data=await fsPromises.readFile('./data.json', 'utf-8');
    const arr= JSON.parse(data);
    res.json({
        status:'Success',
        results:arr.length,
        data:{
        products:arr,
    }
    })
}



const addProducts=async (req,res)=>{
    // console.log(Object.keys(req));
    const data=req.body;
    
    if(!data.price||!data.title){
        res.json({
            status:'fail',
            message:'must provide title and price',
        });
    }else{
    data.id=121;
    console.log(data);
    const db=await fsPromises.readFile('./data.json','utf-8')
    const arr= JSON.parse(db);
    const len=arr.length;
    const newId=data;
    if(len==0){
    data.id=1;
    // console.log(db);
    
    // arr.push(data);
    // console.log(arr);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));
    }else{
    // const newId= db(len-1);
    
    newId.id=(arr[len-1].id)+1;
    // console.log(newId)
    
    
    }
    arr.push(newId);
    fsPromises.writeFile("./data.json", JSON.stringify(arr));
    
    res.json({
        status:'Success',
        results:arr.length,
        data:{
        products:arr,
    }
    })
    }
    // res.send('work in progress');
    }

    const delProducts=async(req,res)=>{
            const reqID=parseInt(req.params.id);
            const arr= JSON.parse(await fsPromises.readFile('./data.json', 'utf-8'));
            const newArr=arr.filter((elem)=>{
                if(elem.id==reqID)return false;
                else return true;
            });
        fsPromises.writeFile('./data.json', JSON.stringify(newArr));
        res.status(204);
        res.json({
            status:'success',
            data:{
                newId:null,
            }
        })
        }


        const replaceProducts = async(req,res)=>{

                const arr= JSON.parse(await fsPromises.readFile("./data.json", 'utf-8'))
            console.log(req);
            // res.send("work in progress");
            const reqID=req.params.id;
            const data=req.body;
            data.id=reqID;
            // console.log(data);
            const newArr= arr.map((elem)=>{
            if(elem.id==reqID)return data;
            else return elem;
            });
            fsPromises.writeFile("./data.json", JSON.stringify(newArr));
            res.json({
                status:'success',
                results:1,
                data:{
                    newId: data,
                }
            })
            }

module.exports={
    getAllProducts,
    addProducts,
    delProducts,
    replaceProducts,
}