 
 import { useState } from 'react'
import{AiOutlineArrowLeft} from 'react-icons/ai'
const logo = require("./assets/logo.webp");

 
 const  Home=()=>{
const[open,setOpen]=useState(false)
return(
<div className="flex">
<div className={`${open ? "w-72":"w-20"} duration-300	 w-72 h-screen relative bg-dark-purple `}>

<AiOutlineArrowLeft onClick={()=>setOpen(!open)} className={`-right-3 top-96 absolute h-[25px] w-[25px]  border-solid cursor-pointer border-2 border-blue-900 rounded-full bg-white duration-500  ${!open && 'rotate-180'}`}/>
<div>
<img  src={logo} className='h-[50px] w-[50px]' alt=''></img>

</div>

</div>
<div className="p-7 text-2xl font-semibold flex-1 h-screen">
<h1>Home page</h1>

</div>








</div>
)


}



export default Home