import React from "react";
import CV from "../assets/CV.pdf"
import{FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import {MdSupportAgent} from "react-icons/md"
import { BsDownload } from "react-icons/bs";
import { Link } from "react-scroll";
import myImage from "../assets/myImage.jpg"
const About=()=>{
    return(
        <div id="about" className=" py-16 bg-gray-100">
<div className="container mx-auto px-6 lg:px-14 flex fle-col md:flex-row items-center justify-between">
    <div className="w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30">
        <img className="w-full h-auto object-cover rounded-4xl"src={myImage} alt="image" />
    </div>
    <div className="w-full md:w-1/2 md:pl-12">
        <h3 className="text-yellow-600 font-semibold text-lg uppercase mb-4">A bit</h3>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-700 mb-6"> About Me</h2>
        <p className="text-gray-500 mb-6">
        Accomplished Software Engineer with a proven track record of successful software projects. 
        Expertise in system design, 
        software architecture, and software development life-cycle.
            </p>
            <div className="flex flex-wrap mb-6">
                <div>
                <div className="flex items-center w-1/2 mb-4">
                    <FaRegHandshake className="text-yellow-400 text-5xl mr-4"/>
                    <div>
                        <h4 className="text-gray-600 font-semibold">3 years+</h4>
                        <p className="text-gray-400">Hands on Experience</p>
                    </div>
                </div>
             
            </div>
            <div className="flex items-center w-1/2 mb-4">
                    <FaRegHandshake className="text-yellow-400 text-5xl mr-4"/>
                    <div>
                        <h4 className="text-gray-600 font-semibold">2 years+</h4>
                        <p className="text-gray-400">Industry Experience</p>
                    </div>
                </div>
             </div>
<div className="flex items-center">
    <Link to="contact" smooth={true} duration={900}>
    <button className="bg-yellow-700 px-8 py-3 rounded-lg mr-4 hover:bg-amber-300 duration-300">Hire me</button>
    </Link>
    <a className="flex items-center text-yellow-600 font-semibold" href={CV} download="CV.pdf">Download Resume <BsDownload className="ml-2 text-lg"/></a>
    </div>
</div>
</div>
</div>

    )
}
export default About