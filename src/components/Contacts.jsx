import React from "react";
import {FiMail, FiMapPin, FiPhone, FiLinkedin} from "react-icons/fi"

const Contact = ()=>
{
    return (
      <div id="contact" className="flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-200">

        <div className="flex flex-1 flex-col px-6 mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Contact</h2>
            <p className="mb-6 text-gray-700">Looking to hire a skilled MERN Stack Developer? I’d love to connect! Whether you need expertise in front-end development with React & Redux, back-end solutions with Node.js & Express, or deployment with Docker & CI/CD, I’m here to help. Feel free to reach out via email or LinkedIn—I’m excited to explore new opportunities! 🚀

            </p>
            <div>
                <div className="space-y-4 text-gray-700">
                   <FiMail className="text-yellow-600 w-6 h-6"/>
                   <span>shrirangswanikar@gmail.com</span>
                </div><div className="space-y-4 text-gray-700">
                   <FiLinkedin className="text-yellow-600 w-6 h-6"/>
                   <span>www.linkedin.com/in/shrirang-wanikar-343066211/</span>
                </div><div className="space-y-4 text-gray-700">
                   <FiPhone className="text-yellow-600 w-6 h-6"/>
                   <span>9999999999</span>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg p-6">
        <form action="https://formsubmit.co/885089ac372b95fc4c8b0663798d3a62" method="POST" className="w-11/12 space-y-4">
           
            <div>
           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name
            <span className="text-red-500">*</span>
           </label>
           <input type="text" id="name" name="name" required placeholder="Name"
           className="mt-1 block w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-yellow-600" />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-900" htmlFor="message">Message</label>  
           <textarea name="message" id="message" rows="5" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-600" placeholder="Your Message..."></textarea>
            </div>
            <div>
                <button type="submit" className="w-full py-2 px-4 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-800 focus:outline-none
                focus:ring-2 focus:ring-yellow-800 focus:ring-offset-2">Submit</button>
            </div>
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_captcha" value="false"></input>
        </form>


        </div>
      </div>  
    )
}
export default Contact