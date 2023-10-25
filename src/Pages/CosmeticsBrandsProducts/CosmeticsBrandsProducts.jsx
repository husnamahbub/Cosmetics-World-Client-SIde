import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";


const CosmeticsBrandsProducts = () => {
    const brandData = useLoaderData()
    console.log(brandData);
    return (
        <div>
         <Navbar></Navbar>   
         <div>
         <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://cdn.parfumdreams.de/Img/Cms/25/Banner-35586_1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full border-2 border-orange-300 rounded-lg">
    <img src="https://1000logos.net/wp-content/uploads/2016/10/Avon-logo.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full border-2 border-orange-300 rounded-lg">
    <img src="https://static.vecteezy.com/system/resources/previews/023/400/675/original/chanel-brand-clothes-symbol-logo-with-name-black-design-fashion-illustration-free-vector.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full border-2 border-orange-300 rounded-lg">
    <img src="https://storage.googleapis.com/twg-content/images/loreal-paris-builds-brand-love-with-search_ca.width-1200.jpg" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
           </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-20 mt-20 lg:ml-20">
        {
          brandData.length === 0 ?
          toast.error("there is no data here",{
            position: "top-center"
          })
          :
            brandData.map(card => <div key={card._id}><div className="card w-80 bg-base-100 shadow-xl">
            <figure><img className="h-52" src={card.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{card.name}</h2>
              <p className="font-bold text-xl border-2 border-orange-200 rounded-lg">{card.brand}</p>
              <p className="font-bold">Rating: {card.rating}</p>
              <p className="font-bold">${card.price}</p>
              <p className="font-bold">{card.category}</p>
              <div className="card-actions justify-end">
                <Link  to={`/updateCosmetics/${card._id}`} className="btn text-white bg-orange-300 rounded-lg">Update</Link>
                <Link to={`/details/${card._id}`}  className="btn text-white bg-orange-300 rounded-lg">Details</Link>
              </div>
            </div>
          </div></div>)
          }
        </div>
         </div>
         <ToastContainer/>
        </div>
    );
};

export default CosmeticsBrandsProducts;