url="https://thatcopy.pw/catapi/rest/";
async function foo(){
    try {
        let resp=await fetch(url);
        let data=await resp.json();
        let result=data.url;
        console.log(result);
        if (result) {
            let object=document.createElement("object");
            object.data=result;
           document.body.append(object);
            
       } else {
           document.body.append("No data");
       }
     
    } catch (error) {
        console.log(error);
        
    }
}
foo();