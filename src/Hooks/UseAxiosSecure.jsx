import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Provider/AuthProvider";
const axiosSecured = axios.create({
    baseURL: "http://localhost:5000",
});

const useAxiosSecured = () => {
    const { logout } = UserAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecured.interceptors.request.use((request) => {
            const token = localStorage.getItem("jm-mart-token");
            if (token) {
                request.headers.Authorization = `Bearer ${token}`;
            }
            return request;
        });
    }, [logout, navigate]);
    return { axiosSecured };
};

export default useAxiosSecured;
