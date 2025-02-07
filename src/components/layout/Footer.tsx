import Link from "next/link";
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Github } from 'lucide-react';
import Image from "next/image";
// import Stayudpate from "./update";
import { Button } from "../ui/button";
import Payment from "/public/payment.png";
import { AiOutlineMail } from "react-icons/ai";


export default function Footer(){
    return(
        <main className="bg-[#F0F0F0] relative p-7 md:px-12 w-full h-full   md:h-[400px] flex flex-col  justify-start items-center mt-32">
          
           <span className="absolute  top-[-60px]">
          


        <main className="w-full flex justify-center items-center mb-14">
            <div className="w-[90%] md:w-full md:h-[150px] rounded-[20px] p-10 bg-black flex flex-col md:flex-row justify-between items-center">
                {/* left */}
                <div className="w-full lg:w-[600px] ">
                <h1 className="text-2xl text-white md:text-3xl font-serif font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

                </div>
                {/* right */}
                <div className="space-y-4 mt-2">
                <div className="  flex justify-start items-center bg-[#F0F0F0] md:w-[300px] h-[35px] pl-2 md:ml-0 hover:border-none rounded-full"> <AiOutlineMail/> <input   placeholder={`Enter your email address`}  className="bg-[#F0F0F0] w-[90%] rounded-full h-full  ml-2"/></div>
                <button className="w-full  text-sm border bg-white py-2 px-10 rounded-[20px]" >Subscribe to Newsletter</button>

                </div>
            </div>
        </main>
         </span>
           
        <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start mt-52  md:mt-20 border-b-2 pb-5">
             {/* top div */}
             <div className="w-full md:w-[40%] mt-5">
                <h1 className="text-2xl md:text-3xl font-extrabold">SHOP.CO</h1>
                <p className="mt-2 text-sm">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Twitter size={28} strokeWidth={1.5} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Facebook size={28} strokeWidth={1.5} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Instagram size={28} strokeWidth={1.5} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-black hover:text-white">
              <Github size={28} strokeWidth={1.5} />
            </Button>
          </div>
             </div>
             {/* bottom div */}
             <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-between md:place-items-center ">
                {/* box1 */}
             <div className="mt-4">
                <h2 className="text-xl">Company</h2>
                <ul className="space-y-1">
                    <li className="font-sans">About</li>
                    <li className="font-sans">Features</li>
                    <li className="font-sans">Works</li>
                    <li className="font-sans">Career</li>
                </ul>
             </div>
             {/* box 2 */}
             <div>
                <h2 className="text-xl mt-4">Help</h2>
                <ul  className="space-y-1">
                    <li className="font-sans">Customer Support</li>
                    <li className="font-sans">Delivery Details</li>
                    <li className="font-sans">Terms & Conditions</li>
                    <li className="font-sans">Privacy Policy</li>
                </ul>
             </div>
             {/* box3 */}
             <div className="space-y-1 mt-4">
                <h2 className="text-xl">FAQ</h2> <ul>
                    <li className="font-sans">Account</li>
                    <li className="font-sans">Manage Deliveries</li>
                    <li className="font-sans">Orders</li>
                    <li className="font-sans">Payments</li>
                </ul>
             </div>
             {/* box4 */}
           <div  className="space-y-1 mt-4">
                <h2 className="text-xl">Resources</h2>
                <ul>
                    <li className="font-sans">Free eBooks</li>
                    <li className="font-sans">Development Tutorial</li>
                    <li className="font-sans">How to - Blog</li>
                    <li className="font-sans">Youtube Playlist </li>
                </ul>
             </div>
             {/* complete */}
             </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row items-center mt-5 md:mt-7 justify-between">
            <p className="text-xs md:text-sm">Shop.co © Made by Hafsa Siddiqui,  All Rights Reserved</p>
            <div className="w-full sm:w-auto">
        <Image src={Payment} alt="Payment Methods" width={280} className="mx-auto sm:mx-0" />
      </div>
        </div>
        
        </main>
    )
}