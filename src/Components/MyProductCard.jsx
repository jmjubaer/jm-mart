/* eslint-disable react/prop-types */
import { useTimer } from 'react-timer-hook';
const MyProductCard = ({product}) => {
    const {itemName,expireDate,itemImage,currentBid} = product || {};
    const expiryTimestamp = new Date(expireDate)
    const {
        seconds,
        minutes,
        hours,
        days
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <div className="border-2 border-[#8E9DFD] rounded-xl p-5">
            <img src={itemImage} alt="Item Image" className="rounded-xl" />
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
        </div>
    );
};

export default MyProductCard;