import { useEffect, useState } from "react"

export  function Fetch(){

    const [page,setPage]=useState(1);
    const [products,setProducts]=useState<any[]>([]);
   

    function handleClick(){
        setPage((prev)=>prev+1);
    }

        useEffect(()=>{

            const controller= new AbortController();

            async function FetchProducts(){
                try{
                const res=await fetch(`https://dummyjson.com/products?limit=5&skip=${(page - 1) * 5}`,{
                    signal:controller.signal
                })
                const data=await (res.json())                                            
                console.log(data.products);
                setProducts(data.products)
            }
            catch(err:any){
            if(err==="AbortError"){
                console.log("Req cancelled....")
            }else{
                console.log(err);
            }
        }
        }
        
        
            FetchProducts()

            return ()=>{
                controller.abort();
            }

        },[page])

    return(
        <>
        {products.map((p:any)=>(
            <p key={p.id}>{p.title}</p>
        ))}

        <button onClick={handleClick}>Next</button>  
        </>
    )

}

// API: https://dummyjson.com/products?limit=5&skip=${(page - 1) * 5}

// 1 : first 5 <Products></Products>
// 2 : 5-10 