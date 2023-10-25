import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MyCart = () => {
    const selectData = useLoaderData()
    console.log(selectData);
    return (
     <div>
        <Navbar></Navbar>
           <div className="grid lg:grid-cols-3 grid-cols-1 mt-20  lg:ml-20">
          {
            selectData.map(cart => <div key={cart._id}>
                <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
            <figure><img className="h-52" src={cart.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{cart.name}</h2>
              <p className="font-bold text-xl border-2 border-orange-200 rounded-lg">{cart.brand}</p>
              <p className="font-bold">Rating: {cart.rating}</p>
              <p className="font-bold">${cart.price}</p>
              <p className="font-bold">{cart.category}</p>
              <p className="font-bold">{cart.details}</p>
              <div className="card-actions justify-end">
                <button  className="btn text-white bg-red-300 rounded-lg">Delete</button>
               
              </div>
            </div>
          </div>
               </div>)
          }
        </div>
     </div>
    );
};

export default MyCart;