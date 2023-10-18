import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import Register from './Components/Register/Register.jsx';
import MyCart from './Components/My Cart/MyCart';
import LogIn from './Components/Login/LogIn';
import BrandProduct from './Components/BrandProduct/BrandProduct';


const router = createBrowserRouter([
  {
    path : "/",
    element : <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : '/addProduct',
        element : <AddProduct></AddProduct>

      },
      {
        path : '/myCart',
        element : <MyCart></MyCart>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/login',
        element : <LogIn></LogIn>
      },
      {
        path : '/home/:name',
        element :<BrandProduct></BrandProduct>,
        loader : ()=> fetch('/brands.json')
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
