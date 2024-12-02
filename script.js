fetch("https://jsonplaceholder.typicode.com/")
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

const myPromice=new Promise((resolve,reject)=>{
    const number=Math.floor(Math.random()*10)
    console.log(number);
    if(number<2)
    {
        resolve("Oparation Success");
    }
    else{
         reject("Operation Failed");
    }
})

const button=document.getElementById("btn")
button.addEventListener("click",()=>{
    myPromice
    .then((responce)=>{
        console.log(responce);
    })
    .catch((error)=>{
        console.log(error);
        })

        async function main() {
            try{
                const result=await myPromice
                console.log(result)
            }
            catch(err)
            {
                console.log(err)
            }
        }
        main()
})

    
    