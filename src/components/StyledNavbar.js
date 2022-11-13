import { NavLink } from "react-router-dom";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Login from "./Login";
import simon from '../images/simon.png'

import About from '../pages/About'
import Single from "../pages/single/Single";
const  Navbar =()=>
{
    return (
        <nav className="navbar">
        <NavLink 
        to ='/'
        className={({isActive}) =>(isActive ? 'link active': 'link')}
        >
        </NavLink> 
        
        <div className="navbar">
            <div className="top-left">
                <i class="top-icon fab fa-instagram-square"></i>
                <i class="top-icon fab fa-tiktok"></i>
                <i class="top-icon fab fa-linkedin"></i>
                <i class="top-icon fab fa-etsy"></i>
            </div>
            <div className="links top-center">
            <NavLink to='/' className="lnk" element={<Home/>}>Home</NavLink>
            
            <NavLink to='/about' className="lnk" element={<About/>}>About</NavLink>
            <NavLink to='/single' className="lnk" element={<Single />}>Post</NavLink>

            {/* <NavLink to='/contact' className="lnk" element={<About/>}>Contact</NavLink> */}
            {/* <NavLink to='/write' className="lnk" element={<About/>}>Write</NavLink> */}
            {/* <NavLink to='/login' className="lnk" element={<Login/>}>Login</NavLink>  */}
            {/* <NavLink to='/products' className="lnk" element={<Products/>}>Products</NavLink> */}
            {/* <NavLink to='/logout' className="lnk" element={<Login/>}>Logout</NavLink> */}
            </div>
            <div className="top-right">
                <img className="top-search-icon" src={simon} alt=""/>
            <i class="fas fa-search"></i>
              
            </div>
        </div>
        </nav>
        
        )
}
export default Navbar;