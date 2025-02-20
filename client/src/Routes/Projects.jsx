
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

// import 

const ProjectComp = () => {
    const projects = [
        {
            name: "Steamlit Banking App",
            image: "../../Steamlit.jpg",
            github: "https://github.com/Aryankakade/streamlit-banking-app",
      
          },
          {
            name: "Live Stock Market Dashboard",
            image: "../../Stock.jpg",
            github: "https://github.com/Aryankakade/stock_market_dash_app",
      
          },
        {
          name: "Banking Operation Analysis Dashboard",
          image: "../../Banking.jpg",
          link: "https://app.powerbi.com/groups/me/reports/4a3fada2-ba7e-4920-bd40-d09245e7c1b7/be94380037ae7288aa6b?experience=power-bi",
          github: "https://github.com/pranav-94/social-media-app",
    
        },
        {
          name: "Chocolate Sales Dashboard",
          image: "../../Choco.jpg",
          link: "https://app.powerbi.com/groups/me/reports/f449a99a-88d7-4048-8b6e-91aa6d0d4589/daaf74b3df6c082b49dc?experience=power-bi",
          github: "https://github.com/pranav-94/Ai-Image-Generator",
          
        },
        {
          name: "Pie Bakery Sales Dashboard",
          image: "../../pie.jpg",
          link: "https://app.powerbi.com/groups/me/reports/3342e651-0ca7-4e4d-b2e6-bec9b3a0d5e9/ReportSection2b3f58a40035329ac50c?experience=power-bi",
          github: "https://github.com/pranav-94/InkFlow",
         
        },
        {
          name: "Hospital Emergency Room Dashboard",
          image: "../../hospi.jpg",
          link: "https://app.powerbi.com/groups/me/reports/74c2c6b6-e1df-47e9-b15b-58f39e9ec1d8/6f4d8ec726210fb39bbe?experience=power-bi",
          github: "https://github.com/pranav-94/chat-app",
        
        },
        {
          name: "CWC 2023 Analysis Report",
          image: "../../cwc.jpg",
          link: "https://app.powerbi.com/groups/me/reports/a31708ac-5909-413f-8661-ef36ae4ccfb0/ReportSection0df55996633294396756?experience=power-bi",
          github: "https://github.com/pranav-94/WeatherWise",
         
        },
      ]
      
      

    return (
        <>
            {projects.map((project, index) => (
                <div key={index} className="flex flex-row items-center justify-evenly mb-10">
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
                            {/* <a href={project.github}>
                                <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" className="w-[25px] h-[25px]" alt="" />
                            </a> */}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Projects
