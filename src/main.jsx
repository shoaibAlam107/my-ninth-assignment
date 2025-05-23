import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout.jsx';
import Error from './Components/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Details from './Components/Details/Details.jsx';
import BrandsOnSell from './Components/BrandsOnSell/BrandsOnSell.jsx';
import Brands from './Components/Brands/Brands.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch("/coupon.json"),
        children:[
          {
            path:"/",
            element:<BrandsOnSell></BrandsOnSell>,
            loader:()=> fetch("/coupon.json")
          }
        ]
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader:()=> fetch("/coupon.json")
      },
      {
        path:"/brands",
        element:<Brands></Brands>,
        loader:()=> fetch("/coupon.json")
      },
      {
        path:"/about",
        element:<h1>this is about dev</h1>
      }
    ]
  },
  
  {
    path:"/auth",
    element:<h1>Login auth</h1>
  },
  {
    path:"/register",
    element:<h1>Register auth</h1>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
