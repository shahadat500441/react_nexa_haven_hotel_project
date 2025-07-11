import React from 'react';
import {NavLink,Link} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
const {  user,logOut}= useContext(AuthContext);

const handelLogOut= ()=>{
 logOut()
 .then(()=>{
  console.log("Log out Successful")
 })
 .catch(error=>{
  console.error(error.message)
 })
  
}


    const links = <>
     <li><NavLink to="/" className={({isActive})=> isActive ? " font-bold bg-primary text-white":" font-bold"}>Home</NavLink></li>
     <li><NavLink to="/register" className={({isActive})=> isActive ? " font-bold bg-primary text-white":" font-bold"}>Register</NavLink></li>
     <li><NavLink to="/login" className={({isActive})=> isActive ? " font-bold bg-primary text-white":" font-bold"}>Login</NavLink></li>
      
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
        
      </ul>
    </div>
    <Link to="/" className=" font-bold text-[#06923E] text-xl">Nexa Haven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {user ? <>
   <img className="w-10 h-10 rounded-full mr-2 border" src={user.photoURL} alt="" />
    <span onClick={handelLogOut}><button className="btn bg-red-700 text-white ">LogOut</button></span>
    </> :<Link to="/login"><button className="btn btn-primary text-white">Login</button></Link>}
  </div>
</div>
    );
};

export default Navbar;