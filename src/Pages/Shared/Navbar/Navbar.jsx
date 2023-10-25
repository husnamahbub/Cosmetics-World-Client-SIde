import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then()
    .catch()
  }
    const navLinkStyle = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "",
        backgroundColor: isActive ? "white" : "",
        color: isActive ? "#ea55c5" : "",
        textDecorationLine: isActive ? "underline" : "",
      });
      
      const navLinks = (
        <>
          <li><NavLink style={navLinkStyle} to="/">Home</NavLink></li>
          <li><NavLink style={navLinkStyle} to="/addProducts">Add Product</NavLink></li>
          <li><NavLink style={navLinkStyle} to="/myCarts">My Carts</NavLink></li>
         
        </>
      );
    return (
        <div>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      {
                   user ?
                 <>
                  <div className="flex items-center gap-3 mr-3">
                  <img className="w-10 rounded-lg" src={user?.photoURL} alt="" />
                   <p>{user?.displayName}</p>
                  </div>
         <button onClick={handleLogOut} className="bg-white text-[#d7535a] rounded-lg py-2 px-5">Log Out</button>
                 </>

                        :
                       <>
                        <li><NavLink style={navLinkStyle} to="/login">Login</NavLink></li>
          <li><NavLink style={navLinkStyle} to="/register">Register</NavLink></li></>
                }
      </ul>
    </div>
    <img className="w-14" src="https://www.zarla.com/images/zarla-plumpd-1x1-2400x2400-20211026-6yq7vmhkg3hmr4r46yy3.png?crop=1:1,smart&width=250&dpr=2" alt="" />
    <a className="btn btn-ghost normal-case text-xl">Cosmetics World</a>
  </div>
  <div className="navbar-center">
    {
          <div className="flex items-center gap-3 mr-3">
          <img className="w-10 rounded-lg" src={user?.photoURL} alt="" />
           <p>{user?.displayName}</p>
          </div>
    }
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
      {
                   user ?
            
         <button onClick={handleLogOut} className="text-white bg-orange-300 rounded-lg py-2 px-5">Log Out</button>
                

                        :
                       
                        <li><NavLink style={navLinkStyle} to="/login">Login</NavLink></li>
        
                }
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;