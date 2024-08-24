import { useState } from "react"
import Nav from "../Components/Navbar"
import Particle from "../Components/ParticleBack"
import Profile from "../Components/Profile"
import { menuAtom } from "../Recoil/atoms"
import { useRecoilValue } from "recoil"

const Contact = ()=>{
    const menuState = useRecoilValue(menuAtom)
    return(
        <>
        <div className={`w-[100%] bg-[#181b1d] md:h-screen text-slate-100 flex-col md:flex-row flex justify-evenly z-0 ${menuState=== false? "h-[1200px]" : "h-[850px]"}`}>
            <Particle/>
            <Profile/>
            <ContactComp/>
        </div>
        </>
    )
}

const ContactComp =()=>{
    return(
        <>
                   <div className='md:w-[70%]  md:h-screen flex justify-center items-center z-10 '>
           <div className='md:w-[90%] w-[90%]  h-[600px] md:h-[500px]  bg-gray-800 rounded-md flex flex-col items-center justify-between'>
                
           <Nav/>
           <p className="w-[90%] flex justify-start text-[40px] text-[#90b8f8] pb-2">Contact</p>
           <div className="flex flex-col justify-evenly items-center h-[400px] ">
            <ContactForm/>
           </div>

           </div>
           </div>
        </>
    )
}

const ContactForm = ()=>{

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const handleEmailClick = () => {
        window.location.href = `mailto:ppranavvvvv918@gmail.com?subject=${title}&body=${content}`;
      };

    return(
        <>
            <div className="w-[100%] flex justify-between">
                <input onChange={e=>{setTitle(e.target.value)} }className="outline-none md:w-[290px] w-[150px] pl-3 h-[45px]  bg-slate-800 border-[1px] border-slate-500 rounded-md" placeholder="Your Name" type="text" />
                <input  className="outline-none md:w-[290px] pl-3 h-[45px] bg-slate-800 border-[1px] border-slate-500 rounded-md" placeholder="Email Address" type="text" />
            </div>
            <textarea onChange={e=>{setTitle(e.target.value)} } className="outline-none pl-3 bg-slate-800 border-[1px] border-slate-500 rounded-md pt-2 w-[330px] md:w-[600px]" placeholder="Your Message"  name="" id="" cols="80" rows="5"></textarea>
            <div className="w-[100%] flex justify-end pt-2">
            <button onClick={handleEmailClick} className="w-[140px] h-[40px] text-[18px] bg-[#90b8f8] text-slate-800 rounded-md font-semibold">Send</button>
            </div>
        </>
    )
}

export default Contact