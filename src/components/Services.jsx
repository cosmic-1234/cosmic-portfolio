import React from "react";
import web1 from "../assets/web1.jpg"
import web2 from "../assets/web2.jpg"
import { FaArrowRight } from "react-icons/fa";
const Services = ()=>{
    return (
     <div id="projects" className="bg-white py-16 px-8">
       <div className="container mx-auto px-6 lg:px-24 text-center">
         <div className="mb-12">
            <h3 className="text-yellow-600 font-bold text-lg mb-2 uppercase ">Projects</h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">MERN Stack Projects</h2>
        </div>
        </div> 
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <img className="w-full h-48 object-cover rounded-lg mb-4" src={web1} alt="image" />
               <h3 className="text-2xl font-semibold text-gray-950 mb-2">Collaborating Drawing App</h3>
               <p className="text-gray-600 mb-4">Created a collaborative Drawing app using express.js, websockets, canvas and front end using Next.js
                </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <img className="w-full h-48 object-cover rounded-lg mb-4" src={web2} alt="image" />
               <h3 className="text-2xl font-semibold text-gray-950 mb-2">Paybay App</h3>
               <p className="text-gray-600 mb-4">Created a real time money Transfor application using express.js, MongoDB, and used libraries such as ZOD for input validation.
                for frontend used React.js
               </p>
            </div>
        </div>
        <div className="mt-8 text-right">
            <a className="flex items-center justify-end text-yellow-600 font-semibold hover:text-amber-100" href="https://github.com/cosmic-1234">Explore Projects on Github <FaArrowRight className="ml-2"/></a>
        </div>
     </div>
    )
}

export default Services