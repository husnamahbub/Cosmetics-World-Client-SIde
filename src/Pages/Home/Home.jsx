import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutOurFounder from "./AboutOurFounder";
import Cos from "./Cos";
import Slider from "./Slider";
import CosmeticsBands from "./CosmeticsBands";

const Home = () => {
    const cosmeticsBandsData = useLoaderData();
    return ( 
        <div> 
            <Navbar></Navbar>
           <Slider></Slider>
           <h1 className="lg:text-5xl text-2xl text-center mt-10 mb-10">Our Cosmetics Bands</h1>
         <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-10 lg:ml-48 ml-3">
         {
            cosmeticsBandsData.map(c => <CosmeticsBands key={c.id} c={c}></CosmeticsBands>)
           }
         </div>
           <AboutOurFounder></AboutOurFounder>
           <Cos></Cos>
           <Footer></Footer>
        </div>
    );
};

export default Home;