import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import CosmeticsBrandsProducts from "../Pages/CosmeticsBrandsProducts/CosmeticsBrandsProducts";
import CosmeticsDetails from "../Pages/CosmeticsBrandsProducts/CosmeticsDetails";
import UpdateCosmetics from "../Pages/UpdateCosmetics/UpdateCosmetics";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/cosmeticsBands')
            },
            {
                path: '/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/myCarts',
                element: <MyCart></MyCart>
            },
            {
                path: '/cosmeticsBrands/:brand',
                element: <CosmeticsBrandsProducts></CosmeticsBrandsProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/cosmetics/${params.brand}`)

            },
            {
                path: '/details/:id',
                element: <CosmeticsDetails></CosmeticsDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/addCosmetics/${params.id}`)

            },
            {
                path: '/updateCosmetics/:id',
                element: <UpdateCosmetics></UpdateCosmetics>,
                loader: ({params}) => fetch(`http://localhost:5000/addCosmetics/${params.id}`)

            }
        ]
        
    }
])

export default router;