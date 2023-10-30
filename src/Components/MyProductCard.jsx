/* eslint-disable react/prop-types */
import { useTimer } from 'react-timer-hook';
import useAxiosSecured from '../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
const MyProductCard = ({product}) => {
    const {axiosSecured} = useAxiosSecured();
    const {itemName,expireDate,itemImage,currentBid,_id} = product || {};
    const expiryTimestamp = new Date(expireDate)
    const {
        seconds,
        minutes,
        hours,
        days
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

      const handleDelete = async() => {
        const deleteRes = await axiosSecured.delete(`/myproducts/${_id}`);
        console.log(deleteRes);
        if(deleteRes?.data?.deletedCount > 0){
            Swal.fire({
                icon: "success",
                title: "Product deleted successful",
                showConfirmButton: false,
                timer: 1500,
            });
        }
      }
    return (
        <div className="border-2 border-[#8E9DFD] rounded-xl p-5 flex flex-col justify-between relative group">
            <img src={itemImage} alt="Item Image" className="rounded-xl w-fit mx-auto object-contain" />
            <h3 className="text-2xl font-semibold my-3">{itemName}</h3>

            <div className="flex justify-between items-end">
                <div className="text-xl">
                    <h5 className="text-sm font-bold mb-1">Current Bid</h5>
                    <p className="font-bold text-3xl cursor-pointer gradient_text">${currentBid}</p>
                </div>
                <div className="p-2 px-3 rounded-xl text-white font-bold bg-[#9054B7]">
                        <span>{days}d</span>: <span>{hours}h</span>: <span>{minutes}m</span>: <span>{seconds}s</span>
                </div>
            </div>
            <button onClick={handleDelete} className='absolute px-5 p-3 bg-red-500 text-white text-2xl rounded-md border shadow-md top-3 right-3 group-hover:block hidden'><FaTrashAlt/></button>
        </div>
    );
};

export default MyProductCard;