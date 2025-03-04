"use client"
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { SheetSide } from "@/components/layout/Hamburger";
import { NavigationMenuDemo } from "@/components/layout/NavigationMenu";
// import { useSelector } from "react-redux";



export default function Header() {
//   const cart =  useSelector((state:any)=>state.cart)

  return (
    
    <div className="sticky top-0 z-10 w-full">
   {/* Top Header */}
    
   <div className="p-2  bg-black text-white text-xs sm:text-sm font-primary w-full text-center h-10 drop-shadow-xl">
        Sign up and get 20% off your first order.
        <button className="underline font-semibold mx-2">Sign Up Now</button>
      </div>
     <header className="w-full  border-b bg-white h-[60px] md:h-[90px] flex justify-between  pr-2 items-center max-w-screen-2xl mx-auto">
           <div className="flex justify-center items-center">
           <SheetSide/>
            {/* logo */}
            <h1 className="text-2xl md:text-4xl font-extrabold pl-2">SHOP.CO</h1>
           </div>
            {/* navigation bar */}


             <div className="hidden xl:block ">
            <ul className="flex gap-x-5 mt-2 items-center" >
                <li className="flex">
                    
                
                    <Link href={``}><NavigationMenuDemo/></Link>
                    </li>
                    <li className="hover:font-semibold">
              <Link href="/sell">On Sale</Link>
            </li>
            <li className="hover:font-semibold">
              <Link href="/newarrival">New Arrivals</Link>
            </li>
            <li className="hover:font-semibold">
              <Link href="/brands">Brands</Link>
            </li>
            
            </ul>
            </div>
            {/* right */}
            {/* <Search/> */}
             <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> 
                <Search  className="text-xl hidden lg:block" /> <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] hidden lg:block outline-none  w-full h-full rounded-full ml-2  "/></div>

            <div className="flex space-x-2 sm:space-x-4 items-center">
            {/* <IoIosSearch className="text-4xl  lg:hidden" /> */}
            <Link href={"/cart"} className="relative">
             <ShoppingCart className="text-2xl lg:text-4xl "/> 
            {/* {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400  rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">{cart.length}</span>
             )

             }             */}
                         </Link>
            {/* <MdOutlineAccountCircle className="text-4xl "/> */}
           
          
            
            </div>
         
         {/* </div> */}
     </header>
     </div>
     
  );
}