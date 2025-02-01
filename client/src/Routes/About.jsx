

import Profile from "../Components/Profile"
import Nav from '../Components/Navbar'
import Particle from "../Components/ParticleBack"
import { menuAtom } from "../Recoil/atoms"
import { useRecoilValue } from "recoil"

const Home = ()=>{
   const menuState = useRecoilValue(menuAtom)
    return(
        <div className={`w-[100%] bg-[#181b1d] md:h-screen  text-slate-100 flex-col md:flex-row flex justify-evenly z-0  ${menuState=== false? "h-[1200px]" : "h-[850px]"}`}>
            <Particle/>
            <Profile/>
            <AboutComp/>
        </div>
    )
}

const AboutComp = ()=>{
    
    return(
        <div className='md:w-[70%] md:h-screen flex justify-center items-center z-10 '>
           <div className='md:w-[90%] w-[90%] h-[600px] md:h-[500px] bg-gray-800 rounded-md flex flex-col items-center justify-between'>


               <Nav/>
               <p className="w-[90%] flex justify-start text-[40px] text-[#90b8f8] pb-2">About</p>
               <div className="flex flex-col justify-evenly items-center h-[400px]">
               <Info/>
               </div>


           </div>
        </div>
    )
}

const Info = ()=>{
    return(
        <div className="w-[90%] md:text-[20px] text-[18px]  md:h-[350px] overflow-scroll">
            <p>I'm Aryan Kakade(5 backlogs don't hire), a data-driven professional from Mumbai, India, passionate about transforming data into actionable insights that drive business growth. With a problem-solving mindset and a creative approach, I specialize in delivering meaningful analytics solutions and impactful visualizations.
I thrive on simplifying complexity and turning numbers into powerful stories. My curiosity and adaptability keep me exploring new technologies to stay ahead in this evolving field.</p>

            <p className="w-[90%] flex justify-start mt-5 text-[40px] text-[#90b8f8] pb-2">Skills</p>
            <SkillsComp/>

        </div>
    )
}

const SkillsComp = () => {
   const skills = [
     {
       name: "Excel",
       imageUrl:
         "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
     },
     { name: "MySQL", imageUrl: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
     { name: "PostgreSQL", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
     {
       name: "Microsoft Power BI",
       imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
     },
     { name: "Python", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
     {
       name: "Google Sheets",
       imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
     },
     {
       name: "Machine Learning",
       imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Hey_Machine_Learning_Logo.svg",
     },
     { name: "Statistics", imageUrl: "https://cdn-icons-png.flaticon.com/512/2784/2784065.png" },
     { name: "Mathematics", imageUrl: "https://cdn-icons-png.flaticon.com/512/3095/3095138.png" },
     { name: "Microsoft Azure", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
     { name: "Apache Spark", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
   ]
 
   return (
     <div className="container mx-auto px-4 py-8">
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {skills.map((skill, index) => (
           <div key={index} className="flex flex-col items-center">
             <div className="w-10 h-10 relative mb-2">
               <img
                 src={skill.imageUrl || "/placeholder.svg"}
                 alt={skill.name}
                 className="w-full h-full object-contain"
               />
             </div>
             <p className="text-center font-medium">{skill.name}</p>
           </div>
         ))}
       </div>
     </div>
   )
 }
 


export default Home
