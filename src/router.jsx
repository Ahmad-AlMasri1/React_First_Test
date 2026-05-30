import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from "./components/home/Home";
import MainLayout from './layout/MainLayout';
import AboutUs from './components/about_us/AboutUs';
import Policy from './components/policy/Policy';
import Pizza from './components/pizza/Pizza';
import Pasta from './components/pasta/Pasta';
import Salad from './components/salad/Salad';
import Search from './components/search/Search';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<MainLayout />,
            children:[
                {
                    index:true,
                    element:<Home />
                },
                {
                    path: "aboutus",
                    element:<AboutUs />
                },
                {
                    path: "policy",
                    element:<Policy />
                    
                },
                {
                    path: "pizza",
                    element:<Pizza />
                        
                },
                {
                    path: "pasta",
                    element:<Pasta />
                },
                {
                    path: "salad",
                    element:<Salad />
                },
                {
                    path: "search",
                    element:<Search />
                }
            ]

        },
    ]
    
);

export default router