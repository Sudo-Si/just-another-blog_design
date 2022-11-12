// import {  Outlet } from "react-router-dom";
// import Products from "./Products";
// import About from './About'
// import Navbar from "./Navbar";

import Header from "../components/Header";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/Sidebar";

const  Home =()=>
{
    return (
        <> 
   <Header />
   <div className="home"> 
   <Posts/>
   <Sidebar />
   </div>
        </>
    )
}
export default Home;