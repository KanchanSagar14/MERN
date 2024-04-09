console.log("start");
async function getAPI(){
    // console.log("api calling..")
    const pr1= new Promise((res,rej)=>{
      console.log("promise 1");
      setTimeout(()=>{
        console.log("timeout 1");
      },10000);
    })
    console.log("promise 1 completed");
    const pr2= new Promise((res,rej)=>{
      console.log("promise 2");
      setTimeout(()=>{
        console.log("timeout 2");
      },10000);
    });
    console.log("promise 2 completed");
}

    getAPI();