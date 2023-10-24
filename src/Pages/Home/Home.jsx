import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutOurFounder from "./AboutOurFounder";
import Cos from "./Cos";
import Slider from "./Slider";

const Home = () => {
    return (
        <div> 
            <Navbar></Navbar>
           <Slider></Slider>
           <AboutOurFounder></AboutOurFounder>
           <Cos></Cos>
           <Footer></Footer>
        </div>
    );
};

export default Home;