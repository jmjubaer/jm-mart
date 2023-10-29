import { UserAuth } from "../../Provider/AuthProvider";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Outlet } from "react-router-dom";
const Account = () => {
    const {user} = UserAuth();

    return (
        <div className="bg-slate-300 ">
            <div className="bg_image h-80">
            </div>
            <div className="bg-white">
                <div className="container flex py-2 items-center text-2xl font-semibold gap-5 ">
                    <img className="w-24 h-24 rounded-full object-cover border-4  z-50" src={user?.photoURL} alt="" />
                    <h3>{user?.displayName}</h3>
                    <h3 className="ml-8"><b>Email</b>: {user?.email}</h3>
                    <button className="ml-auto w-14 h-14 border-2  rounded-full flex items-center justify-center cursor-pointer"><BsThreeDotsVertical/></button>
                </div>
            </div>
            <div className="min-h-[400px] container">
                <Outlet/>
            </div>
        </div>
    );
};

export default Account;