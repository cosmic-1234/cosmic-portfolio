//import { text } from "express";
import React from "react";
import { useState } from "react";
import {IoMdMenu} from "react-icons/io";
import {IoClose} from "react-icons/io5";
import CV from "../assets/CV.pdf";
import { Link } from "react-scroll";
const Navbar = ()=>{
    const [menu, setMenu] = useState(false);
    const items = [
        { id: 1, text:"About", to:"about"},
        { id: 2, text:"Projects", to:"projects"},
       // { id: 3, text:"Testimonials", to:"testimonials"},
        { id: 4, text:"Links", to:"links"},
        { id: 5, text:"Contact", to:"contact"},

    ];

    
return(
    <div className="bg-yellow-50 text-black w-full">
        <div className="container mx-auto p-4 hidden md:flex justify-between items-center"> 
            <div className=" text-xl md:text-2xl font-bold flex items-center gap-1">
            <span className="text-amber-600">Shrirang</span>
            <span className="text-yellow-800">Wanikar</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center list-none text-lg">
           {
            items.map(({id, text, to})=>(
                <li key={id} className="hover:text-yellow-800 duration-500 cursor-pointer ">
                    <Link to={to} smooth={true} duration={900}>{text}
                    </Link>
                    </li>
            ))
           }
           </div>
           <a href = {CV} download = "CV_Shrirang_Wanikar-2025.pdf" className="text-lg bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-700">Resume</a>
        </div>
        <div className="flex w-full justify-between items-center md:hidden p-2 shadow-sm">
            <div className=" text-xl font-bold flex items-center gap-2">
                <span className=" text-black">Shrirang</span>
                <span className="text-yellow-300">Wanikar</span>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div onClick={()=>setMenu(!menu)}>
                  {menu ? (<IoClose size={30} className="text-black"/>) : (<IoMdMenu size={30} className="text-black"/>)}
                </div>

            </div>
        </div>
        <div>
            {menu && (
                <div className="md:hidden bg-amber-50 py-6 justify-center items-center gap-2 text-lg text-black flex flex-col list-none shadow-sm">
                      {
            items.map(({id, text, to})=>(
                <li key={id} className="hover:text-yellow-800 duration-500 cursor-pointer border-b w-11/12">
                    <Link to={to} smooth={true} duration={900}>{text}
                    </Link>
                    </li>
            ))
           }
           <a href = {CV} download = "CV_Shrirang_Wanikar-2025.pdf" className="text-lg bg-amber-500 text-black px-4 py-2 mt-3 rounded hover:bg-amber-700">Resume</a>
                </div>
            )}
        </div>
    </div>
)

}
export default Navbar;