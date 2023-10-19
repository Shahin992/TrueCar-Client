import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const ProductDetails = () => {
    const ProductData = useLoaderData();
    console.log(ProductData);
    const {_id, photo, productName, brandName, type, price, description, rating} = ProductData;
    const { id } = useParams();


    const handleAddToCart = () =>{
        console.log('product added to cart');
        console.log(ProductData);
        fetch('http://localhost:5000/mycart',{
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(ProductData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Product Added Successfully to your cart!',
                  'success'
                  )}
        })

        .catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'You added this before...!',
                text: ''
              })
        })
    }





    return (
        <div className="p-4">
           <div className=" max-w-7xl mx-auto lg:w-[90%]  my-10 card lg:card-side bg-base-100 shadow-lg shadow-slate-700 hover:shadow-2xl hover:shadow-black">
  <figure className="lg:w-1/2"><img className="lg:w-full h-full object-cover" src={photo} alt="Album"/></figure>
  <div className="card-body lg:w-3/4 bg-stone-200 rounded-b-3xl lg:rounded-tr-3xl lg:rounded-br-3xl">
    <h2 className="card-title text-3xl md:text-5xl font-extrabold mb-3">{productName}</h2>
    <p className="md:text-3xl text-xl  font-medium">{description}</p>
    <p className="text-3xl md:text-5xl  font-extrabold">Price: ${price}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddToCart} className="text-white bg-accent-focus btn">Add To Cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductDetails;