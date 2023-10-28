import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaTimes } from 'react-icons/fa';
import { UserAuth } from "../Provider/AuthProvider";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {user} = UserAuth()
    return (
        <div className=" py-3 border-b-2">
            <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center container'>
                <h1 className='text-4xl lg:col-span-2 jm-shadow'><Link to="/"><span className='font-serif text-5xl text-blue-e '>J</span>m <span className='font-serif text-5xl text-blue-e'>M</span>ert</Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-blue-e" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/statistics">Statistics</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/applied">Applied Jobs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-blue-e" : "" } to="/blogs">Blog</NavLink></li>
                    </ul>
                    {
                        user ? <div className="">
                                <img
                                    data-tooltip-id="my-tooltip"
                                    className="w-12 h-12 rounded-full object-cover border bg-white"
                                    src={user?.photoURL}
                                    alt=""
                                />
                        </div>
                        : <Link to={'/login'} className=' btn btn-primary mt-10 lg:mt-0'>Login </Link>
                    }
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;