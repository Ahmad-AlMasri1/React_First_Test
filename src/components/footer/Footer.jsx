import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div>
        <footer className="bg-neutral pt-20 pb-8">
            <div className="container mx-auto px-2 max-md:px-8">
                <div className="md:row max-md:col justify-between pb-12.5 border-b border-b-[#6C7275]">
                    <div className="flex w-full gap-8 max-md:gap-4 max-md:col max-md:pb-10">
                        <div className="bg-neutral"><img src="./src/assets/logo2.svg"/></div>
                        <div className="md:border-e md:border-e-[#6C7275] max-md:border-b max-md:border-b-[#6C7275] max-md:w-6"></div>
                        <div className="bg-neutral font-Inter text-[14px]/[22px] font-normal text-[#E8ECEF]">Food Resturant</div>
                    </div>
                    <ul className="row gap-10 max-md:col max-md:gap-8">
                        <li><Link to="/" className="font-Inter text-[14px]/[22px] font-normal text-[#FEFEFE]">Home</Link></li>
                        <li><a href="shop.html" className="font-Inter text-[14px]/[22px] font-normal text-[#FEFEFE] text-nowrap">About Us</a></li>
                        <li><Link to="policy" href="product.html" className="font-Inter text-[14px]/[22px] font-normal text-[#FEFEFE] text-nowrap">Subscription policy</Link></li>
                    </ul> 
                </div>
                <div className="row justify-between py-4 max-md:col max-md:gap-8">
                    <div className="row gap-7 max-md:col max-md:gap-7">
                        <p className="font-Poppins text-[#E8ECEF] text-[12px]/[20px] font-normal">Copyright © 2023 3legant. All rights reserved</p>
                        <div className="row gap-7  max-md:order-first">
                            <Link to="" className="font-Poppins text-[#FEFEFE] text-[12px]/[20px] font-semibold">Privacy Policy</Link>
                            <Link to="" className="font-Poppins text-[#FEFEFE] text-[12px]/[20px] font-semibold">Terms of Use</Link>
                        </div>
                    </div>
                    <div className="row gap-6 max-md:order-first">
                        <Link to=""><img src="./src/assets/icons/footer/instagram.svg"/></Link>
                        <Link to=""><img src="./src/assets/icons/footer/Vector 2998.svg"/></Link>
                        <Link to=""><img src="./src/assets/icons/footer/youtube.svg"/></Link>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer