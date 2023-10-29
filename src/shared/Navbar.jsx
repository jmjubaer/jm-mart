import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Provider/AuthProvider";
import { FaAngleRight } from "react-icons/fa";



const Navbar = () => {
	const [condition, setCondition] = useState(false);
    const {user,logout} = UserAuth() ;
    const handleLogOut = () => {
        logout()
        setCondition(false)
    }
    return (
        <div className=" py-3 border-b-2">
            <nav className='flex container justify-between'>
                <h1 className='text-4xl lg:col-span-2 jm-shadow'><Link to="/"><span className='font-serif text-5xl text-blue-e '>J</span>m <span className='font-serif text-5xl text-blue-e'>M</span>ert</Link></h1>

                <div className="relative">
                    {
                        user ? <div className="">
                                <img
                                    className="w-12 h-12 rounded-full object-cover border bg-white cursor-pointer"
                                    src={user?.photoURL}
                                    alt=""
                                    onClick={() => setCondition(!condition)}
                                />
                        </div>
                        : <Link to={'/login'} className=' btn btn-primary mt-10 lg:mt-0'>Login </Link>
                    }
                    {condition && (
									<div className="w-60 top-16 right-0 h-fit absolute z-50 overflow-hidden bg-white border rounded-lg">
										<Link
											to={'/account'}
											onClick={() => setCondition(false)}
											className={`hover:bg-slate-200 flex items-center justify-between w-full px-5 py-3 font-semibold text-left duration-200`}
										>
											<span>My Account</span>
											<FaAngleRight />
										</Link>
										<button
											onClick={handleLogOut}
											className="hover:bg-slate-200 flex items-center justify-between w-full px-5 py-3 font-semibold text-left"
										>
											<span>Log out</span>
											<FaAngleRight />
										</button>
									</div>
					)}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
