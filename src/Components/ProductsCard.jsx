/* eslint-disable react/prop-types */
import { useTimer } from 'react-timer-hook';
const ProductsCard = ({product}) => {
    const {itemName,expireDate,itemImage,currentBid,ownerName,ownerPhoto} = product || {};
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

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        className="w-12 h-12 rounded-full object-cover border bg-white"
                        src={ownerPhoto}
                        alt=""
                        />
                    <h4 className="text-lg font-medium">{ownerName}</h4>
                </div>
                <div className="p-2 px-3 rounded-xl text-white font-bold bg-[#9054B7]">
                        <span>{days}d</span>: <span>{hours}h</span>: <span>{minutes}m</span>: <span>{seconds}s</span>
                </div>
            </div>
            <div className="border-t-2 mt-2 pt-3 flex justify-between">
                <div className="text-xl">
                    <h5 className="text-sm font-bold mb-1">Current Bid</h5>
                    <p className="font-bold text-3xl cursor-pointer gradient_text">${currentBid}</p>
                </div>
                <button className="jm_btn-tiny">Place Bid</button>
            </div>
        </div>
    );
};

export default ProductsCard;