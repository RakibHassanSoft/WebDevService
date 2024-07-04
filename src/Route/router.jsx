import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Blogs from '../Pages/Blogs/Blogs/Blogs';
import Blog from '../Pages/Blogs/Blog/Blog';
import ContractUs from '../Pages/ContractUs/ContractUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import About from '../Pages/About/About';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Errror from '../Pages/Error/Error';
import Services from '../Pages/Services/Services';
import WebDevelopment from '../Pages/Services/WebDevelopment/WebDevelopment';
import WordPress from '../Pages/Services/WordPress/WordPress';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Errror></Errror>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        
        },
        {
            path: "/blog/:Id",
            element: <Blog />,
        },
        
        {
            path:"/contact",
            element:<ContractUs></ContractUs>
        },
        {
            path:"/login",
            element:<Login></Login>
        
        },
        {
            path:"/register",
            element:<Register></Register>
        }
        ,
        {
            path:"/about",
            element:<About></About>
        }
        ,
        {
            path:"/portfolio",
            element:<Portfolio></Portfolio>
        }
        ,
        {
            path:"/services",
            element:<Services></Services>
        }
        ,
        {
            path:"/web-development",
            element:<WebDevelopment></WebDevelopment>
        }
        ,
        {
            path:"/responsive-website",
            element:<WordPress></WordPress>
        }
    ]
  },
]);


export default router;