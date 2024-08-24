// // import Nav from "../Components/Navbar"

// const About = ()=>{
//     return(
//         <>
//         <div className='w-[100%] h-[900px] md:h-screen bg-[#181b1d] text-[#90b8f8] flex flex-col justify-evenly'>
//     {/* <Nav/> */}
//     <div className="w-[100%] flex flex-col items-center  md:h-[350px] justify-around">
//     <p className="w-[80%] text-[50px]">About Me</p>
//     <Para/>
//     </div>
//     <Skills/>
//         </div>
//         </>
//     )
// }

// const Para = ()=>{
//     return(
//         <>
//         <p className="text-white text-[23px] w-[80%]">Hello! I'm Pranav, a web developer with a strong passion for creating seamless user experiences. My expertise lies in frontend development with React and TypeScript, and I enjoy working with JavaScript and CSS libraries like Next.js and Tailwind. 🌟 Beyond frontend, I have a solid grasp of backend technologies, including Node.js and Express.js, which helps me work closely with backend teams to ensure smooth integration across the stack. 🚀 I'm always eager to learn new things and contribute to cutting-edge projects. Let's connect and explore new possibilities together!</p>
//         </>
//     )
// }

// const Skills =()=>{
//     return(
//         <div className="flex">
//             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/JS.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/TypeScript.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/Python.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/Java.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/354259/react.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/452075/node-js.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/342062/next-js.svg" alt="" />
//             <img className="w-[50px] h-[50px]" src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175119.png?f=webp&w=512" alt="" />
//         </div>
//     )
// }
    

// export default About

import Profile from "../Components/Profile"
import Nav from '../Components/Navbar'
import Particle from "../Components/ParticleBack"
import { menuAtom } from "../Recoil/atoms"
import { useRecoilValue } from "recoil"

const Projects = ()=>{

    const menuState = useRecoilValue(menuAtom)

    return(
        <div className={`w-[100%] bg-[#181b1d] text-slate-100 flex-col md:flex-row flex z-0   md:h-screen justify-evenly ${menuState=== false? "h-[1200px]" : "h-[850px]"}`}>
            <Particle/>
            <Profile/>
            <AboutComp/>
        </div>
    )
}

const AboutComp = ()=>{
    
    return(
        <div className='md:w-[70%] h-screen flex justify-center items-center z-10'>
           <div className='md:w-[90%] w-[90%]  md:h-[500px] h-[600px] bg-gray-800 rounded-md flex flex-col items-center justify-between'>

               <Nav/>
               <p className="w-[90%] flex justify-start text-[40px] text-[#90b8f8] pb-2  md:mt-0 md:mb-0">Projects</p>
               <div className="flex flex-col justify-evenly items-center h-[400px]  w-[90%]">
               <Info/>
               </div>
           </div>
        </div>
    )
}

const Info = ()=>{
    return(
    <div className="w-[100%]  text-[20px] h-[350px] overflow-scroll flex flex-col ">
            <ProjectComp/>
        </div>
    )
}

const ProjectComp = ()=>{
    return(
        <>
             <div className="flex mt-5 md:mt-0 items-center  justify-evenly">
             <p className="w-[30%] hidden md:flex">React <br /> Node.js <br /> Express js <br />MongoDB</p>
                <div>
                <img src="/SocailPulse.png" className="w-[380px] h-[190px] rounded-md hover:brightness-75 transition-all duration-500 ease-in-out" alt="" />
                <div className="flex justify-evenly items-center w-[100%]">
                <p className="mt-2">SocialPulse</p>
                <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" className="w-[25px] h-[25px]" alt="" />
                </div>
                </div>
             </div>
             <div className="flex flex-row items-center  justify-evenly mt-10 mb-10">             <p className="w-[30%] hidden md:flex">React <br /> Node.js <br /> Express js <br />MongoDB</p>
                <div>
                <img src="/AI.png" className="w-[380px] h-[190px] rounded-md border-2 border-slate-200 hover:brightness-75 transition-all duration-500 ease-in-out" alt="" />
                <div className="flex justify-evenly items-center w-[100%]">
                <p className="mt-2">AI Byte</p>
                <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" className="w-[25px] h-[25px]" alt="" />
                </div>
            </div>
             </div>
             <div className="flex flex-row items-center  justify-evenly mb-10">             <p className="w-[30%] hidden md:flex">React <br /> Node.js <br /> Express js <br />MongoDB</p>
                <div>
                <img src="/BlogApp.png" className="w-[380px] h-[190px] rounded-md hover:brightness-75 transition-all duration-500 ease-in-out" alt=""/>

                <div className="flex justify-evenly items-center w-[100%]">
                <p className="mt-2">InkFlow</p>
                <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" className="w-[25px] h-[25px]" alt="" />
                </div>
                </div>
             </div>
             <div className="flex flex-row items-center  justify-evenly">             <p className="w-[30%] hidden md:flex">HTML <br /> Tailwind-Css <br /> Weather-Api</p>
                <div>
                <img src="/weatherWise.png" className="w-[380px] h-[190px] rounded-md hover:brightness-75 transition-all duration-500 ease-in-out" alt=""/>

                <div className="flex justify-evenly items-center w-[100%]">
                <p className="mt-2">WeatherWise</p>
                <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" className="w-[25px] h-[25px]" alt="" />
                </div>
                </div>
             </div>
        </>
    )
}

export default Projects