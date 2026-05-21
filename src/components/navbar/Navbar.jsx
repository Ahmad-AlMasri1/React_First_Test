import React , { useState } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
        <header className="sticky top-0 bg-white z-100">
            <div className="container mx-auto navbar bg-base-100 px-1 ">
                <div className="navbar-start gap-3">
                    <div className="drawer w-8 mb-1.5 lg:hidden">
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                        
                            <label for="my-drawer-1" className="btn btn-ghost btn-circle drawer-button"><img className="size-10" src="./src/assets/icons/menu-line-horizontal.svg"/></label>
                        </div>
                        <div className="drawer-side">
                            <label for="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                            
                            <div className="menu bg-base-200 min-h-full w-80 p-6">
                                <div className="up mb-auto">
                                <div className="row justify-between">
                                    <Link to="/" className="btn btn-ghost text-xl"><img className="w-20" src="./src/assets/logo.svg"/></Link>
                                    <label for="my-drawer-1" aria-label="close sidebar" className="drawer-overlay btn btn-ghost"><img className="w-7"  src="./src/assets/icons/close.svg"/></label>
                                </div>
                                <div className="search p-4">
                                    <label className="input">
                                        <button className="btn btn-ghost btn-circle">
                                            <a href="#"><img src="./src/assets/icons/search 02.svg"/></a>
                                        </button>
                                        <input type="search" required placeholder="Search" className="font-Inter text-[14px]/[22px] font-normal"/>
                                    </label>
                                </div>  
                                <ul>
                                    <li><Link to="/" className="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">Home</Link></li>
                                    <li><a href="#" className="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">pizza</a></li>
                                    <li><a href="#" className="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">pasta</a></li>
                                    <li><a href="#" className="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">salad</a></li>
                                    <li><Link to="aboutus" className="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">About Us</Link></li>
                                    <li><a href="product.html" className="font-Inter text-[14px]/[24px] font-medium pb-2 border-b-2 border-b-[#E8ECEF]">Subscription policy</a></li>
                                </ul>
                                </div>
                                <div className="bot">
                                    <button className="btn btn-neutral font-Inter text-[18px]/[32px] font-medium px-26.25 py-5  text-white my-5">Sign In</button>
                                    <ul className="row justify-start gap-6 items-start">
                                        <li><a href="#"><img src="./src/assets/icons/instagram.svg"/></a></li>
                                        <li><a href="#"><img src="./src/assets/icons/facebook.svg"/></a></li>
                                        <li><a href="#"><img src="./src/assets/icons/youtube.svg"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"><img className="w-25" src="./src/assets/logo.svg"/></Link>
                </div>
                <div className="navbar-center">
                    <ul className="row gap-10 max-lg:hidden">
                        <li><Link to="/" href="index.html" className="font-Space-Grotesk text-[14px]/[24px] font-bold">Home</Link></li>
                        <li><a href="#" className="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">pizza</a></li>
                        <li><a href="#" className="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">pasta</a></li>
                        <li><a href="#" className="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">salad</a></li>
                        <li><Link to="aboutus" className="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">About Us</Link></li>
                        <li><a href="#" className="font-Space-Grotesk text-[14px]/[24px] font-bold text-[#6C7275] hover:text-black transition-all delay-125">Subscription policy</a></li>
                    </ul>    
                </div>
                <div className="navbar-end gap-0.5">
                    <button className="btn btn-ghost btn-circle">
                        <a href="#"><img src="./src/assets/icons/search 02.svg"/></a>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <a href="#"><img src="./src/assets/icons/user-circle.svg"/></a>
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar