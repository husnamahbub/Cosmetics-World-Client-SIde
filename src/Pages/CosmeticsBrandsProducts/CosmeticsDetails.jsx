import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const CosmeticsDetails = () => {
    const detailsData = useLoaderData()

    return (
        <div>
           <Navbar></Navbar> 
           <div className="card h-[700px] bg-base-100 shadow-xl">
  <figure  className="h-80"><img src={detailsData.photo} alt="Shoes" className="h-80" /></figure>
  <div className="card-body">
  <h2 className="card-title">{detailsData.name}</h2>
              <p className="font-bold text-xl border-2 border-orange-200 rounded-lg">{detailsData.brand}</p>
              <p className="font-bold">Rating: {detailsData.rating}</p>
              <p className="font-bold">${detailsData.price}</p>
              <p className="font-bold">{detailsData.category}</p>
              <p className="font-bold">{detailsData.details}</p>
    <div className="card-actions justify-end">
    <button className="btn text-white bg-orange-300 rounded-lg">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CosmeticsDetails;