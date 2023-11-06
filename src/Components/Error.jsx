
import Lottie from "lottie-react";
import err from '../assets/error.json'
import { useNavigate } from "react-router-dom";
const Error = () => {
    const GoTo = useNavigate();
    const Goback = () => {
        GoTo('/')
    }
    return (
        <div className=" flex flex-col items-center bg-black h-[100vh] w-full">

            <div className=" w-[500px] h-[600px] mx-auto">
                <Lottie animationData={err} loop={true}></Lottie>
            </div>
            <div>
                <button onClick={Goback} className=" btn">Go Home</button>
            </div>
        </div>
    );
};

export default Error;