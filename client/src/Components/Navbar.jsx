import { Link } from "react-router-dom"

const Nav =()=>{
    return(
        <div className="md:w-[40%] h-[60px] flex justify-evenly w-[100%] items-center font-semibold border-[1px] border-[#90b8f8] text-[#90b8f8]  shadow-lg rounded-lg ">
            {/* <p className="text-[20px] ">@pranav-94</p> */}
             <Link to='/' className="text-[20px] w-[33.3%] h-[60px] hover:bg-[#90b8f8] hover:text-black flex justify-center items-center rounded-md transition-all duration-500 ease-in-out">About</Link>
             <Link to='/projects' className="text-[20px] w-[33.3%] h-[60px] hover:bg-[#90b8f8] hover:text-black flex justify-center items-center transition-all duration-500 ease-in-out">Projects</Link>
             <Link to='/contact' className="text-[20px] w-[33.3%] h-[60px] hover:bg-[#90b8f8] hover:text-black flex justify-center items-center rounded-md transition-all duration-500 ease-in-out">Contact</Link>
        </div>
    )
}

export default Nav