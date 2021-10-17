import Link from 'next/link'
import React from 'react'
import Example from "./DropdownRender";

export default function Panda (){
    return (
        
        <div> 
          <div className="bg-gray-50 p-4 flex justify-between items-center " >
          <div className="flex  items-center">
          <img src="https://static.tildacdn.com/tild3736-6664-4037-b461-383834636366/Panda_logo_H_trnsprn.svg" width="100" alt="Logo"></img>
        </div>
    
        <div>
          <Link href="/" >
            <a className="inline-block p-1 text-green-600 bg-white ring-2 ring-green-600 hover:text-green-800 hover:color-green600 rounded shadow-xl">Back to main page</a>
          </Link>
          <a href="#" className="inline-block p-3 hover:text-green-900">Free trail</a>
          <a href="#" className="inline-block p-3 hover:text-green-900" >Podcast</a>
          <a href="#" className="inline-block p-3 hover:text-green-900">About us</a>
          <a href="#" className="inline-block p-3 hover:text-green-900">How it works</a>
        </div>
      </div>
        
        <div className="flex justify-between py-3 px-20 ">
  
        <div>
         <h2 className="md:w-7/12  lg:w-7/12 md:text-2xl lg:text-3xl mb-2">Behavior change at scale with AI chatbot coach</h2>
         <p className="md:w-9/12  lg:w-9/12  md:text-lg lg:text-xl ">
           70% of transformation programs fail. Why? One of the biggest challenges of every organization is that employees have a hard time prioritizing and focusing on what matters. We attempt to solve this challenge by using scalable coaching solutions.
         </p>
         <input type="text" placeholder="Get our update" className="border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent inline-block p-1.5 shadow-xl rounded " />
         <a href="/" className="inline-block px-7 p-1.5 text-white bg-green-600   hover:bg-green-500 hover:text-white rounded shadow-xl">Subscribe</a> 
        </div>
       
        <div></div>
       </div>
     
       <div className="p-50 text:white">-</div>
       <div className="text-center  py-5">
         <h2 className="md:text-2xl lg:text-3xl">What we can help with</h2>
       </div>
     
     
       <div className="md:flex px-10  text-center place-items-center content-center items-center ">
       
         <div className="mr-5 text-center ">
           <img src="https://static.tildacdn.com/tild6235-3037-4966-a139-633964383334/Group_44.png" alt="" className=" w-full mr-2 mb-2 ">
           </img>
           <h3 className="md:text-xl lg:text-2xl mb-2 ">Change Management</h3>
           <p className="md:text-base lg:text-xl mb-4 ">Supporting people in strategy execution, agile and digital transformations</p>
         </div>
       
         <div className="mr-5 text-center">
           <img src="https://static.tildacdn.com/tild3035-3737-4334-b938-363430373433/behaviour.png" alt="" className=" w-full mr-2 mb-2">
           </img>
           <h3 className="md:text-xl lg:text-2xl mb-2">People Development</h3>
           <p className="md:text-base lg:text-xl mb-4 ">Helping leaders and specialists grow with scalable coaching solutions</p>
         </div>
         
         <div className="mr-5 text-center">
           <img src="https://static.tildacdn.com/tild6636-3738-4664-b130-336337633037/people_development.png" alt="" className="w-full mr-2 mb-2">
           </img>
           <h3 className="md:text-xl lg:text-2xl mb-2">Training Follow Up</h3>
           <p className="md:text-base lg:text-xl mb-4 ">Making sure that people apply to work whatever they learned in the weekend-long training</p>
         </div>
       </div>
     
     
     
       <div className="md:flex justify-between items-center text-center px-40">
         <a href="/" className="inline-block p-1 text-green-600 bg-white ring-2 ring-green-600 rounded shadow-xl">Read more</a>
         <a href="/" className="inline-block p-1 text-green-600 bg-white ring-2 ring-green-600  rounded shadow-xl">Watch our pitch</a>
       </div>
     
     
     
     <div className="p-50 text:white">-</div>
       <div className="text-center  py-5">
         <h2 className="md:text-2xl lg:text-3xl">What we do</h2>
       </div>
     
       <div className="md:flex px-10  text-center place-items-center content-center items-center ">
       
       <div className="mr-5 text-center ">
         <h3 className="md:text-xl lg:text-2xl mb-2 ">Strategy, plan, or desire</h3>
         <p className="md:text-base lg:text-xl mb-4 ">We start with your plan to get from A to B. Sometimes, just a desire for change</p>
       </div>
       
       <div className="mr-5 text-center">
         <h3 className="md:text-xl lg:text-2xl mb-2">Bottom-up: Micro-coaching</h3>
         <p className="md:text-base lg:text-xl mb-4 ">Scalable AI chatbot coaching solutions to support employees and execution</p>
       </div>
         
       <div className="mr-5 text-center">
         <h3 className="md:text-xl lg:text-2xl mb-2">Top-down: Data and Insight</h3>
         <p className="md:text-base lg:text-xl mb-4 ">Monthly insights from qualitative data collected through coaching</p>
       </div>
     </div>
     
     <div className="text-center bg-green-300 bg-opacity-50 items-center px-30 py-20 shadow-xl">
       <h2 className="md:text-2xl lg:text-3xl"> Feedback from the employees</h2>
       <div className="py-5 px-20 lg:text-xl md:text-lg">
         <p>"Love how my coach is guiding me through the session. Every time I discover new things about myself that I didn't know I have. It also allows me to develop skills in such an engaging and enjoyable way. Each session leaves a feel good about yourself, factor that will make you crave for more..."</p>
         <p className="py-1">We collect feedback anonymously to encourage honesty.</p>
       </div>
     </div>
     
     
     <div className="text-center items-center  py-10">
       <h2 className="md:text-2xl lg:text-3xl">Statistically significant results</h2>
       <img src="https://static.tildacdn.com/tild6337-6363-4338-a131-643764346236/Screen_Shot_2020-11-.png" alt="" className="">
       </img>
     </div>
     
     
     
     <div className="p-50 text:white">-</div>
     <div className="text-center  py-5">
         <h2 className="md:text-2xl lg:text-3xl">Winner of several hackathons and awards</h2>
     </div>
     
     
     
     <div className="md:flex px-10  text-center place-items-center content-center items-center ">
       
       <div className="mr-5 text-center ">
         <img src="https://static.tildacdn.com/tild6434-3539-4166-b533-373064643535/8c7cbfa2-2eb0-4aa6-8.png" alt="" className=" w-full mr-2 mb-2 ">
         </img>
         
       </div>
       
       <div className="mr-5 text-center">
         <img src="https://static.tildacdn.com/tild3833-6262-4062-b963-313432353138/bdaee5187bc22168824a.png" alt="" className=" w-full mr-2 mb-2">
         </img>
         
       </div>
         
       <div className="mr-5 text-center">
         <img src="https://static.tildacdn.com/tild3931-6239-4939-b665-343432356635/microsoft-logo.png" alt="" className="w-full mr-2 mb-2">
         </img>
         
       </div>
       
       <div className="mr-5 text-center">
         <img src="https://static.tildacdn.com/tild3865-3161-4237-b061-303334626133/Swedbank_logo_logoty.png" alt="" className="w-full mr-2 mb-2">
         </img>
         
       </div>
       
       <div className="mr-5 text-center">
         <img src="https://static.tildacdn.com/tild3861-3330-4132-b164-373035303139/E-Learning_E-Badge.jpg" alt="" className="w-full mr-2 mb-2">
         </img>
       </div>
       
     </div>
     
     
     
     <div className="item-center text-center content-center">
     
     </div>
     
      <div className="item-center text-center content-center">
      <Example/>
      </div>
     
     
     <div>
       <div></div>
      
         <div className="px-20 py-10 flex justify-between items-center">
           <a href="/" className="inline-block p-3 hover:text-green-900">Contact us</a>
           <a href="/" className="inline-block p-3 hover:text-green-900" >Case studies</a>
           <a href="/" className="inline-block p-3 hover:text-green-900">FAQ</a>
           <a href="/" className="inline-block p-3 hover:text-green-900">Home</a>
         </div>
       
       
       <div className="text-center" >
         <p>Copyright © 2021 — Made with ♥ by Panda Training</p>
       </div>
     </div>
     
     </div>
        
    )
}