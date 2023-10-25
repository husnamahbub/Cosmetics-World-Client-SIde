import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateCosmetics = () => {
  const cosmetics = useLoaderData()
  const {_id, details, photo, name, brand, rating, price, category} = cosmetics;
    const handleUpdateCosmeticProducts = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const details = form.description.value;
        const photo = form.image.value;

        const newCosmetics = { name, brand,  rating, price, category, details, photo }

        // send data to the server
        fetch(`https://my-assignment-server-side.vercel.app/addCosmetics/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCosmetics)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                 toast.success("update successfully",{
                  position: "top-center"
                 })
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
           <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-3xl font-extrabold">Update Products</h2>
          <div className="min-h-[800px] py-10">

    <form onSubmit={handleUpdateCosmeticProducts} className="">
      <div className="grid lg:grid-cols-2 gap-16 px-20">
        <div>
          <div>
            <h3 className="font-bold text-xl mb-5">Photo URl</h3>
            <input
              type="text"
              name="image"
              defaultValue={photo}
              placeholder="your cosmetic photo url"
              className="input input-bordered text-black  w-full"
              required
            />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Name</h3>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="your cosmetic name"
              className="input input-bordered text-black  w-full"
              required
            />
          </div>
          <label>
              <h3 className="font-bold text-xl mb-5">
              Brand Name
              </h3>
              <select
                className="input input-bordered   w-full text-black"
                name="brand"
                defaultValue={brand}
              >
                <option value="Nive">Nive</option>
                <option value="L'Oréal">L'Oréal</option>
                <option value="Avon">Avon</option>
                <option value="Estée Lauder">Estée Lauder</option>
                <option value="Coty">Coty</option>
                
              </select>
            </label>
       
        </div>
        <div>
          <div>
            <label>
              <h3 className="font-bold text-xl mb-5">
                Cosmetics Category
              </h3>
              <select
                className="input input-bordered   w-full text-black"
                name="category"
                defaultValue={category}
              >
                 <option value="Nivea Soft">Nivea Soft</option>
                  <option value="Face Cosmetics">Face Cosmetics</option>
                  <option value="Face Wash">Face Wash</option>
                  <option value="Body Wash ">Body Wash</option>
                  <option value="Face Cream">Face Cream</option>
                  <option value="Face Cosmetics">Face Cosmetics</option>
                  <option value="Body Lotion">Body Lotion</option>
              </select>
            </label>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-5">Price</h3>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="your cosmetic price"
              className="input input-bordered text-black  w-full"
              required
            />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-5">Rating</h3>
            <input
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder="your cosmetic rating 1-6"
              className="input input-bordered text-black  w-full"
              required
            />
          </div>
        </div>
      </div>
      <div className="px-20 mt-5">
        <h3 className="font-bold text-xl mb-5">Description</h3>
        <input
          type="text"
          name="description"
          defaultValue={details}
          placeholder="your cosmetic description"
          className="input input-bordered text-black  w-full"
          required
        />
      </div>

      <div className="px-20 mt-5 mb-10">
        <button className="btn bg-orange-300 text-white font-bold w-full">
          Update 
        </button>
      </div>
    </form>
   </div>
  </div>
  <ToastContainer />
   </div>
    
    );
};

export default UpdateCosmetics;