/* eslint-disable react/no-unescaped-entities */
import Lottie from 'lottie-react';
import banner from "../assets/banner.json"

const Banner = () => {
    return (
        <div>
            <div className=' flex flex-col lg:flex-row md:flex-row pt-20 lg:justify-between container items-center mx-auto'>
                <div className=' lg:flex-[1] md:flex-1 pl-10 space-y-6 mx-auto border-2 '>
                    <h1 className=' text-4xl lg:text-7xl font-bold'> Elevate Your Online <br className=' block lg:hidden md:hidden' /> Experience with <span className=' text-orange-600'>Job Hunt</span>!</h1>
                    <p className=' w-[70%] text-justify'>Your gateway to innovation, information, and inspiration. Discover more, do more, and be more with our user-friendly platform. Welcome to a world of limitless possibilities!"</p>
                    <div className=' flex items-center'>
                        <input type="text" className=' px-3 py-2 rounded-l-lg' placeholder=' Search more.....' />
                        <button className=' rounded-r-lg bg-[coral] px-3 py-2'>Search here</button>
                    </div>
                </div>

                <div className=' flex-[1] border-2 hidden lg:block md:block'>
                    <Lottie className=' w-[90%]' animationData={banner} loop={true}></Lottie>
                </div>
            </div>

        </div>
    );
};

export default Banner;