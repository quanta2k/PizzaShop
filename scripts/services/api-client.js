//HTTP/HTTPS Call
import URL from '../utils/constant.js'
 async function makeNetworkCall(){
    try{
    const response=await fetch(URL); //block
    const object = await response.json(); //block
    return object;  //WRAP PROMISE
    }
    catch(err){
        console.log('Some problem in API Call', err);
        throw err;
    }

//     const promise= fetch(URL);  //ASSIGN TO THREAD
//     console.log('Promise is ', promise)
//     promise.then(response=>{ 
//         console.log("response is ", response);
//         response.json(); //Deserialisation
//         const promise2= response.json();
//         promise2.then(data=>console.log('Data is ',data))
//         .catch(e=>console.log('JSON parse Error',e))
        
//     }).catch(err=>{
//         console.log('Error is ', err);
//     })
}

export default makeNetworkCall;