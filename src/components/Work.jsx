import React from "react";
import work1 from "../assets/work1.png"
import leetcode from "../assets/leetcode.svg"
import github from "../assets/github.svg"
const Work=()=>{
    function Github() {
        window.location.href="https://github.com/cosmic-1234"
    }
    function Leetcode() {
        
        window.location.href="https://leetcode.com/u/gootalex/";
    
      }
    const casestudies = [
        {id:1, title: "Leetcode",
            description:"Solved 500+ Problems on leetcode and have Indepth knowledge of various data structures including graphs, trees, stacks, linked lists and many more. also have knowledge of Algorithms such as recurrsion DP and Backtracking. ",
            workImage:leetcode,
            funcid:Leetcode
        },
        {id:2, title: "Github",
            description:"Have created multiple project on Github using Next.js, React.js, express.js, Websockets and many more ",
            workImage: github,//Z"
            funcid:Github
        },

    ]
    return(
    <div id="links" className="container mx-auto px-4 py-12">
      <h3 className="text-yellow-400 font-semibold text-center uppercase mb-2 text-2xl">Links</h3>  

      <h2 className="text-4xl font-bold text-center mb-12">My DSA and Project links</h2>
    {casestudies.map((study, index)=>(
        <div key={study.id} className={`flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
 <div className="w-full lg:w-1/3 p-4">
    <img src={study.workImage} alt="test" className="w-full h-full object-cover rounded-lg shadow-lg" />
 </div>
 <div className="w-full lg:1/2 p-4">
     <div className="flex items-center mb-4">
      <span className="text-2xl font-bold text-amber-600 mr-2">{`0${index+1}`}</span>   
      <h3 className="text-2xl font-semibold">{study.title}</h3>
     </div>
     <p className="text-gray-700 mb-4">{study.description}</p>
  <button onClick ={study.funcid}className="border-2 border-amber-400 text-yellow-600 px-4 py-2 rounded-full hover:bg-amber-300 hover:text-amber-700">Details</button>
 </div>
</div>
    ))}
    </div>
    )
}

export default Work