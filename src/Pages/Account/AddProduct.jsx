import { useForm } from "react-hook-form";
import { UserAuth } from "../../Provider/AuthProvider";
import useAxiosSecured from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const {user} = UserAuth();
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const {axiosSecured} = useAxiosSecured();
    const hostingURL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_KEY
    }`;
    const handleAddProducts = (data) => {

        console.log(data);
        const formData = new FormData();
        formData.append("image", data.itemImage[0]);
        fetch(hostingURL, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then(async(imgRes) => {
                if (imgRes.success) {
                    const newProduct = {
                        itemName: data.itemName,
                        itemImage: imgRes?.data?.display_url,
                        currentBid: data.currentBid,
                        expireDate: data.expireDate,
                        timeStamp: new Date(),
                        ownerName: user?.displayName,
                        ownerEmail: user?.email,
                        ownerPhoto: user?.photoURL
                    }
                    const res = await axiosSecured.post('/product',newProduct)
                    console.log(res?.data);
                    if(res?.data?.insertedId){
                        Swal.fire({
                            icon: "success",
                            title: "Product Added successful",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        reset();
                        navigate('/account')
                    }
                }
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-2/3 rounded-lg p-10 my-20 border-2 bg-[#d2d2d2] shadow-xl bg-opacity-30">
                <h2 className="text-4xl font-bold text-center my-5">Add a Product</h2>
                <form onSubmit={handleSubmit(handleAddProducts)}>
                    <div className="">
                        <label htmlFor="itemName" className="text-2xl font-bold">Product Name:</label>
                        <input
                            required
                            className="jm_input"
                            placeholder="Enter your Product Name"
                            type="text"
                            id="itemName"
                            {...register("itemName")}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        
                        <div className="mt-5">
                            <label htmlFor="intibit" className="text-2xl font-bold">Initial Price:</label>
                            <input
                                required
                                className="jm_input"
                                placeholder="Enter initial Bid price"
                                type="number"
                                id="intibit"
                                {...register("currentBid")}
                            />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="exp" className="text-2xl font-bold">Expire Date:</label>
                            <input
                                required
                                className="jm_input"
                                type="datetime-local"
                                id="exp"
                                {...register("expireDate")}
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="itemImage" className="text-2xl font-bold">Product Name:</label>
                        <input
                            required
                            className="jm_input"
                            placeholder="Enter your Product Name"
                            type="file"
                            id="itemImage"
                            {...register("itemImage")}
                        />
                    </div>

                    <div className="mt-8">
                        <label htmlFor="description" className="text-2xl font-bold">Product Description:</label>
                        <textarea
                            required
                            className="jm_input min-h-[180px]"
                            placeholder="Enter Product Description...."
                            id="description"
                            {...register("description")}
                        ></textarea>
                    </div>

                    <input
                        className="jm_btn rounded-3xl w-full mt-8"
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;