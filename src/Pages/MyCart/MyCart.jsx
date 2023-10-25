import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyCart = () => {
    const selectData = useLoaderData()

    const [users, setUsers] = useState(selectData)
    const handleDelete = _id => {

         fetch(`https://my-assignment-server-side.vercel.app/selectCart/${_id}`, {
             method: "DELETE"
            
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
             if(data.deletedCount > 0) {
            toast.success("the cart is delete successfully")
           const remainingUser = users.filter(user => user._id !== _id)
           setUsers(remainingUser)
            }
         })
        }
 return (
     <div>
        <Navbar></Navbar>
           <div className="grid lg:grid-cols-3 grid-cols-1 mt-20  lg:ml-20">
          {
            users.map(cart => <div key={cart._id}>
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
                <button onClick={() => handleDelete(cart._id)}  className="btn text-white bg-red-300 rounded-lg">Delete</button>
               
              </div>
            </div>
          </div>
               </div>)
          }
        </div>
        <ToastContainer/>
     </div>
    );
};

export default MyCart;