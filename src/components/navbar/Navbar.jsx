import React , { useState } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
        <header class="sticky top-0 bg-white z-100">
            <div class="container mx-auto navbar bg-base-100 px-1 ">
                <div class="navbar-start gap-3">
                    <div class="drawer w-8 mb-1.5 lg:hidden">
                        <input id="my-drawer-1" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content">
                        
                            <label for="my-drawer-1" class="btn btn-ghost btn-circle drawer-button"><img class="size-10" src="./src/assets/icons/menu-line-horizontal.svg"/></label>
                        </div>
                        <div class="drawer-side">
                            <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay"></label>
                            
                            <div class="menu bg-base-200 min-h-full w-80 p-6">
                                <div class="up mb-auto">
                                <div class="row justify-between">
                                    <Link to="/" class="btn btn-ghost text-xl"><img class="w-20" src="./src/assets/logo.svg"/></Link>
                                    <label for="my-drawer-1" aria-label="close sidebar" class="drawer-overlay btn btn-ghost"><img class="w-7"  src="./src/assets/icons/close.svg"/></label>
                                </div>
                                <div class="search p-4">
                                    <label class="input">
                                        <button class="btn btn-ghost btn-circle">
                                            <a href="#"><img src="./src/assets/icons/search 02.svg"/></a>
                                        </button>
                                        <input type="search" required placeholder="Search" class="font-Inter text-[14px]/[22px] font-normal"/>
                                    </label>
                                </div>  
                                <ul>
                                    <li><Link to="/" class="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">Home</Link></li>
                                    <li><a href="#" class="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">pizza</a></li>
                                    <li><a href="#" class="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">pasta</a></li>
                                    <li><a href="#" class="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">salad</a></li>
                                    <li><Link to="aboutus" class="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">About Us</Link></li>
                                    <li><a href="product.html" class="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">Subscription policy</a></li>
                                </ul>
                                </div>
                                <div class="bot">
                                    <button class="btn btn-neutral font-Inter text-[18px]/[32px] font-medium px-26.25 py-5  text-white my-5">Sign In</button>
                                    <ul class="row justify-start gap-6 items-start">
                                        <li><a href="#"><img src="./src/assets/icons/instagram.svg"/></a></li>
                                        <li><a href="#"><img src="./src/assets/icons/facebook.svg"/></a></li>
                                        <li><a href="#"><img src="./src/assets/icons/youtube.svg"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/" class="btn btn-ghost text-xl"><img class="w-25" src="./src/assets/logo.svg"/></Link>
                </div>
                <div class="navbar-center">
                    <ul class="row gap-10 max-lg:hidden">
                        <li><Link to="/" href="index.html" class="font-Space-Grotesk text-[14px]/[24px] font-bold">Home</Link></li>
                        <li><a href="#" class="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">pizza</a></li>
                        <li><a href="#" class="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">pasta</a></li>
                        <li><a href="#" class="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">salad</a></li>
                        <li><Link to="aboutus" class="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">About Us</Link></li>
                        <li><a href="#" class="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">Subscription policy</a></li>
                    </ul>    
                </div>
                <div class="navbar-end gap-0.5">
                    <button class="btn btn-ghost btn-circle">
                        <a href="#"><img src="./src/assets/icons/search 02.svg"/></a>
                    </button>
                    <button class="btn btn-ghost btn-circle">
                        <a href="#"><img src="./src/assets/icons/user-circle.svg"/></a>
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar