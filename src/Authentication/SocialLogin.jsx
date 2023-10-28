/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {UserAuth} from "../Provider/AuthProvider";
// import UserAuth  from "../Provider/AuthProvider";

const SocialLogin = () => {
    const navigate = useNavigate();
    const { googleSignIn, githubSignIn } = UserAuth();
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                if (user) {
                    const newUser = {
                        image: user?.photoURL,
                        name: user?.displayName,
                        email: user?.email,
                        role: "student",
                    };
                    axios
                        .post("http://localhost:5000/user", newUser)
                        .then((res) => {
                            Swal.fire({
                                icon: "success",
                                title: "User created successful",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            navigate("/");
                        });
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${err.message}`,
                });
            });
    };
    const handleGitHubLogin = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    icon: "success",
                    title: "User created successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/");
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${err.message}`,
                });
            });
    };
    return (
        <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <button
                onClick={handleGoogleLogin}
                className="flex jm_btn rounded-md w-full items-center"
            >
                <div className="">
                    <FaGoogle className="text-2xl text-[#E94235]" />
                </div>
                <span className="text-center w-full">Google</span>
            </button>
            <button
                onClick={handleGitHubLogin}
                className="flex jm_btn rounded-md w-full items-center"
            >
                <div className="">
                    <FaGithub className="text-2xl text-black" />
                </div>
                <span className="text-center w-full">GitHub</span>
            </button>
        </div>
    );
};

export default SocialLogin;
