import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-150px)]">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;