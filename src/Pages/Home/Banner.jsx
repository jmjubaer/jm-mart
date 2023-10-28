import animation from '../../assets/banner-animation.json'
import Lottie from "lottie-react";

const Banner = () => {
    return (
        <div className='grid grid-cols-2 my-20 gap-5 items-center container'>
            <div className="col-span-">
                <h1 className='text-8xl leading-normal font-bold'>Discover, Collect & Sell!</h1>
                <p className='my-5 text-lg w-3/4'>Shop, Sell, and Win! Your One-Stop Marketplace for Everything You Desire
Embrace the Excitement of Real-Time Auctions and Hassle-Free Transactions.</p>
                <button className='jm_btn'>Discover</button>
            </div>
            <div className="col-span-">
                <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Banner;