import React from "react";
import{BsDownload} from "react-icons/bs"
import CV from "../assets/CV.pdf"
import { Link } from "react-scroll";
import wbdev from "../assets/web-devlopment.svg"
const Hero = ()=>{
    return (
<div className="text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm:px-10  lg:px-40 bg-gradient-to-t from-white to-yellow-200">
    <div className="w-full md:w-1/2 mb-10 text-center md:text-left mt-25">
       <h3 className="text-base md:text-lg lg:text-xl mb-0 md:-mb-2 text-amber-600 ">Hello, I am</h3>
       <h1 className="text-2xl md:text-4xl lg:text-6xl my-0 md:ml-1 font-bold text-amber-900 py-2 md:py-2">Shrirang Wanikar</h1> 
       <h3 className="text-base md:text-xl lg:text-2xl text-amber-500">Software Engineer</h3>
       <p className="text-small md:text-lg lg:text-xl tracking-tighter text-yellow-900 ">
       I am a MERN Stack Developer passionate about building scalable, high-performance web applications.
        I specialize in dynamic front-end development using Context API and Redux Toolkit, 
        along with developing efficient back-end systems. With a strong focus on clean code and modern technologies, 
       I have extensive experience with CI/CD pipelines and Docker and am currently learning Kubernetes.
       </p>
    <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
    <Link to="contact" smooth={true} duration={900}>
                       
    <button className="bg-yellow-500 px-10 py-1 rounded-lg mr-4 hover:bg-amber-700 duration-500">Hire Me</button>
    </Link>
    <a className ="flex items-center text-yellow-700 font-semibold"href={CV} download="CV_Shrirang_Wanikar-2025.pdf">
        Download Resume <BsDownload className="ml-2 text-lg"/></a>
    </div>
    </div>
    <div className="w-full md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end -mb-20 md:mb-0">
        <img className="max-w-full h-auto" src={wbdev} alt="AVATAR" />

    </div>
</div>

    )
}
export default Hero