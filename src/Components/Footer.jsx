import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import Lottie from "lottie-react";
import logo from '../assets/logo.json'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#557C55] text-slate-50">
                <aside>
                    <Lottie className=" w-[100px] text-[#A6CF98]" animationData={logo}></Lottie>
                    <p><span className=" text-3xl">Job Hunter.</span><br />Most trusting Job seeking platform since 2013</p>
                    <div className=' media flex gap-3'>
                        <h1 className=' text-3xl '>       <BsFacebook /></h1>
                        <h1 className=' text-3xl '><AiFillInstagram /></h1>
                        <h1 className=' text-3xl '> <FcGoogle /></h1>


                    </div>

                </aside>
                <nav>
                    <header className="footer-title">Service</header>
                    <a className="link link-hover">Part Time jobs</a>
                    <a className="link link-hover">Full time Jobs</a>
                    <a className="link link-hover">On Site Jobs</a>
                    <a className="link link-hover">Hybrid Jobs</a>
                    <a className="link link-hover">Search Remote Jobs</a>
                </nav>
                <nav>
                    <header className="footer-title">Address</header>
                    <p>
                        66, Mohakhali, dhaka - 1216
                    </p>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <div className=" text-center bg-black text-[#A6CF98] font-poppins">
                <p>Copyright © 2023 - All right reserved</p>
            </div>


        </div>
    );
};

export default Footer;