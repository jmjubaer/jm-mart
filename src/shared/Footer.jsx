import { Link } from "react-router-dom";
import { FaGoogle,FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#232748] bg-opacity-50">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-5 border-b-2 border-amber-500 container ">
                <div className="">
                    <Link to="/">
                        {/* <img src={} alt="" /> */}
                    </Link>
                    <p className="my-5">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <ul className="flex gap-2">
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaGoogle/></a></li>
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaTwitter/></a></li>
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaInstagram/></a></li>
                        <li><a href="#" className="bg-slate-600 p-2 inline-block text-white rounded-full"><FaLinkedin/></a></li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="hover:text-amber-600 block my-2"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                className="hover:text-amber-600 block my-2"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/favorites"
                                className="hover:text-amber-600 block my-2"
                            >
                                Favorite recipe
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                    <ul>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaFacebook className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaTwitter className="inline mr-2 text-blue-400 text-xl" />{" "}
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaLinkedin className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Linked in
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaInstagram className="inline mr-2 text-rose-600 text-xl" />{" "}
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                    <ul>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaFacebook className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaTwitter className="inline mr-2 text-blue-400 text-xl" />{" "}
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaLinkedin className="inline mr-2 text-blue-600 text-xl" />{" "}
                                Linked in
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-amber-600 my-2 block"
                                href="#"
                            >
                                <FaInstagram className="inline mr-2 text-rose-600 text-xl" />{" "}
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center my-5">
                © 2023. JM_Resipes . All rights reserved.{" "}
            </p>
        </div>
    );
};

export default Footer;
