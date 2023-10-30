import { useEffect, useState } from "react";
import useAxiosSecured from "./UseAxiosSecure";
import { UserAuth } from "../Provider/AuthProvider";

const UseGetMyProducts = () => {
    const {user} = UserAuth();
    const {axiosSecured} = useAxiosSecured();
    const [myProducts, setMyProducts] = useState([]);
    const [reFetch, setReFetch] = useState(true);

    const refetch = () => {
        setReFetch(!reFetch);
    }
    useEffect(()=> {
        (async () => {
            const getMyProduct = await axiosSecured(`/myproducts?email=${user?.email}`);
            setMyProducts(getMyProduct?.data)
        })()
    },[axiosSecured,user?.email,reFetch])
    return {myProducts,refetch}
};

export default UseGetMyProducts;