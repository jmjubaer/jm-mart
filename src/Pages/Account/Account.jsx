import { useState } from "react";
import { UserAuth } from "../../Provider/AuthProvider";
import { BsHouse, BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const Account = () => {
    const {user} = UserAuth();
	const [condition, setCondition] = useState(false);

    return (
        <div className="bg-slate-300 ">
            <div className="bg_image h-80">
            </div>
            <div className="bg-white">
                <div className="container flex py-2 items-center text-2xl font-semibold gap-5 relative">
                    <img className="w-24 h-24 rounded-full object-cover border-4  z-50" src={user?.photoURL} alt="" />
                    <h3>{user?.displayName}</h3>
                    <h3 className="ml-8"><b>Email</b>: {user?.email}</h3>
                    <Link to={"/"} className="ml-auto text-3xl cursor-pointer"><BsHouse/></Link>
                    <button onClick={()=> setCondition(!condition)} className=" w-14 h-14 border-2  rounded-full flex items-center justify-center cursor-pointer"><BsThreeDotsVertical/></button>
                    {condition && (
									<div className="w-60 top-24 shadow-lg right-0 h-fit absolute z-50 overflow-hidden bg-white border rounded-lg">
										<Link
											to={'/account'}
                                            onClick={() => setCondition(false)}
											className={`hover:bg-slate-200 flex items-center justify-between w-full px-5 py-3 font-semibold text-left duration-200`}
										>
											<span>My Collection</span>
											<FaAngleRight />
										</Link>
										<Link
											to={'/account/addproducts'}
                                            onClick={() => setCondition(false)}
											className={`hover:bg-slate-200 flex items-center justify-between w-full px-5 py-3 font-semibold text-left duration-200`}
										>
											<span>Add Products</span>
											<FaAngleRight />
										</Link>
									</div>
					)}
                </div>
            </div>
            <div className="min-h-[400px] container">
                <Outlet/>
            </div>
        </div>
    );
};

export default Account;