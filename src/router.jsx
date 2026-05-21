import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from "./components/home/Home";
import Recipe from './components/recipe/Recipe';
import MainLayout from './layout/MainLayout';
import AboutUs from './components/about_us/AboutUs';
import Policy from './components/policy/Policy';
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
            ]

        },
    ]
);
export default router