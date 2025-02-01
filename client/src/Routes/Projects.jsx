
import Profile from "../Components/Profile"
import Nav from '../Components/Navbar'
import Particle from "../Components/ParticleBack"
import { menuAtom } from "../Recoil/atoms"
import { useRecoilValue } from "recoil"
import { Link } from "react-router-dom"

const Projects = ()=>{

    const menuState = useRecoilValue(menuAtom)

    return(
        <div className={`w-[100%] bg-[#181b1d] md:h-screen text-slate-100 flex-col md:flex-row flex justify-evenly z-0 ${menuState=== false? "h-[1200px]" : "h-[850px]"}`}>
            <Particle/>
            <Profile/>
            <AboutComp/>
        </div>
    )
}

const AboutComp = ()=>{
    
    return(
        <div className='md:w-[70%] md:h-screen flex justify-center items-center z-10'>
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
    <div className="w-[100%]  text-[20px] md:h-[350px] overflow-scroll flex flex-col ">
            <ProjectComp/>
        </div>
    )
}

const ProjectComp = () => {
    const projects = [
        {
          name: "Banking Operation Analysis Dashboard",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Financial_Analysis_Dashboard.jpg",
          link: "https://social-media-app-omega-seven.vercel.app/",
          github: "https://github.com/pranav-94/social-media-app",
          technologies: [
            "https://www.svgrepo.com/show/354259/react.svg",
            "https://www.svgrepo.com/show/452075/node-js.svg",
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
            "https://www.svgrepo.com/show/331488/mongodb.svg",
          ],
        },
        {
          name: "Chocolate Sales Dashboard",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Retail_Sales_Dashboard.jpg",
          link: "https://ai-image-generator-nine-mu.vercel.app/",
          github: "https://github.com/pranav-94/Ai-Image-Generator",
          technologies: [
            "https://www.svgrepo.com/show/354259/react.svg",
            "https://www.svgrepo.com/show/452075/node-js.svg",
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
            "https://downloads.marketplace.jetbrains.com/files/14282/146547/icon/pluginIcon.png",
          ],
        },
        {
          name: "Pie Bakery Sales Dashboard",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bakery_Sales_Dashboard.png",
          link: "https://ink-flow-green.vercel.app/",
          github: "https://github.com/pranav-94/InkFlow",
          technologies: [
            "https://www.svgrepo.com/show/354259/react.svg",
            "https://www.svgrepo.com/show/452075/node-js.svg",
            "https://downloads.marketplace.jetbrains.com/files/14282/146547/icon/pluginIcon.png",
            "https://seeklogo.com/images/H/hono-logo-85A5D1206D-seeklogo.com.png",
          ],
        },
        {
          name: "Hospital Emergency Room Dashboard",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Hospital_ER_Dashboard.jpg",
          github: "https://github.com/pranav-94/chat-app",
          technologies: [
            "https://www.svgrepo.com/show/354259/react.svg",
            "https://www.svgrepo.com/show/452075/node-js.svg",
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
            "https://www.svgrepo.com/show/331488/mongodb.svg",
          ],
        },
        {
          name: "CWC 2023 Analysis Report",
          image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Cricket_Analytics_Dashboard.png",
          link: "https://weatherwise-eight.vercel.app/dist/index2.html",
          github: "https://github.com/pranav-94/WeatherWise",
          technologies: ["https://www.svgrepo.com/show/374118/tailwind.svg", "https://abrudz.github.io/logos/JS.svg"],
        },
      ]
      
      

    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="flex flex-row items-center justify-evenly mb-10">
                    <div className="w-[30%] hidden md:flex justify-evenly">
                        {project.technologies.map((tech, i) => (
                            <img key={i} className="w-[40px] h-[40px]" src={tech} alt="" />
                        ))}
                    </div>
                    <div>
                        {project.link ? (
                            <a href={project.link}>
                                <img src={project.image} className="w-[380px] h-[150px] md:h-[190px] rounded-md hover:brightness-75 transition-all duration-500 ease-in-out" alt="" />
                            </a>
                        ) : (
                            <img src={project.image} className="w-[380px] h-[150px] md:h-[190px] rounded-md hover:brightness-75 transition-all duration-500 ease-in-out border-2 border-slate-200" alt="" />
                        )}
                        <div className="flex justify-evenly items-center w-[100%]">
                            <p className="mt-2">{project.name}</p>
                            <a href={project.github}>
                                <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" className="w-[25px] h-[25px]" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Projects
