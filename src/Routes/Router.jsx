import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import CosmeticsBrandsProducts from "../Pages/CosmeticsBrandsProducts/CosmeticsBrandsProducts";
import CosmeticsDetails from "../Pages/CosmeticsBrandsProducts/CosmeticsDetails";
import UpdateCosmetics from "../Pages/UpdateCosmetics/UpdateCosmetics";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Page404 from "./Page404";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Page404></Page404>,
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
             path: '/login',
             element: <Login></Login>
            },
            {
            path: '/register',
            element: <Register></Register>
            },
            {
                path: '/myCarts',
                element: <MyCart></MyCart>,
                loader: () => fetch("http://localhost:5000/selectCart")
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