import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from "./components/home/Home";
import Recipe from './components/recipe/Recipe';
import MainLayout from './layout/MainLayout';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<MainLayout/>,
            children:[
                {
                    index:true,
                    element:<Home />
                },  
            ]

        },
    ]
);
export default router