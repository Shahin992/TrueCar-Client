/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const Brands = () => {
    const [brandName,setBrandName] = useState([])
    useEffect(() =>{
        fetch('/brands.json')
      .then(res => res.json())
      .then(data => setBrandName(data))
    },[])
    return (
        <div className=" max-w-7xl lg:p-5 mx-auto p-3">
            <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Shop by your favorite brands</h2>
   
        </div>

            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 justify-center items-center gap-7 gap-y-20 mb-10">
            {
                brandName.map(brand => {
                    return (
                        <div>
                               
                               <div className="hover:shadow-black shadow-gray-500 rounded-xl shadow-2xl w-full lg:w-[250px] h-[150px] flex justify-center card-shadow  items-center gap-5">
                           
                           <img className="w-10 h-10 " src={brand.image} alt={brand.name}/>
                           <h1 className="font-semibold text-xl">{brand.name}</h1>
                       </div>



                        </div>
                       
                    
                    )
                })
            }
            
        </div>
        </div>
    );
};

export default Brands;
