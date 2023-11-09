import CategorySection from "../Components/CategorySection";
import { CgProfile } from 'react-icons/cg'
import { BsFillPencilFill } from 'react-icons/bs'
import { BiLogoFlutter, BiLogoPaypal } from 'react-icons/bi'

import { AiOutlineLogin, AiFillAmazonSquare } from 'react-icons/ai'
import { Helmet } from "react-helmet-async";
const Home = () => {

    return (
        <div>
            <Helmet>
                <title>SkillSafari | Home</title>
            </Helmet>

            <div className=" pt-[100px]">
                <h1 className=" text-5xl font-bold text-center font-poppins text-[#557C55]">Job Info </h1>
                <div className=" container mx-auto">
                    <CategorySection></CategorySection>

                </div>
            </div>
            <div className=" h-[80vh] space-y-[100px]">
                <h1 className=" md:text-7xl  text-5xl lg:text-7xl  text-center font-poppins font-bold text-[#345734]"> How it's works</h1>
                <div className=" flex lg:flex-row md:flex-row flex-col justify-center items-center gap-5 font-poppins">
                    <div className=" text-center flex justify-center flex-col space-y-6 w-[400px] items-center">
                        <h1 className=" text-7xl text-[#A6CF98]"> <CgProfile></CgProfile></h1>
                        <h1 className=" text-4xl font-poppins font-bold">   Create Account</h1>
                        <p className=" text-[#224517] font-poppins"> It’s very easy to open an account and start your journey.</p>
                    </div>
                    <div className=" text-center flex justify-center flex-col space-y-6 w-[400px] items-center">
                        <h1 className=" text-7xl text-[#A6CF98]"><BsFillPencilFill /> </h1>
                        <h1 className=" text-4xl font-poppins font-bold">   Complete your profile
                        </h1>
                        <p className=" text-[#224517] font-poppins"> Complete your profile with all the info to get attention of client.</p>
                    </div>
                    <div className=" text-center flex justify-center flex-col space-y-6 items-center w-[400px]">
                        <h1 className=" text-7xl text-[#A6CF98]"><AiOutlineLogin></AiOutlineLogin> </h1>
                        <h1 className=" text-4xl font-poppins font-bold"> Apply job or hire
                        </h1>
                        <p className=" text-[#224517] font-poppins"> Apply & get your preferable jobs with all the requirements and get it.</p>
                    </div>


                </div>
            </div>
            <hr className=" container mx-auto" />
            <div className=" min-h-screen font-poppins py-[50px] space-y-5">

                <h1 className=" md:text-7xl text-5xl lg:text-7xl text-center font-bold mb-4 text-[#557C55]">Top Company</h1>
                <p className=" text-xl text-center">Get hired From Top Company's. </p>
                <div className=" flex lg:flex-row md:flex-row flex-col  justify-evenly items-center py-[100px]">
                    <div className=" w-[400px] h-[200px] rounded-lg bg-white shadow-xl  space-y-6 flex justify-center  items-center flex-col">
                        <h1 className=" flex items-center justify-center text-4xl bg-[#557C55] w-[50px] h-[50px] text-white rounded-full">
                            <BiLogoFlutter></BiLogoFlutter>
                        </h1>
                        <p>New York, New York; Seattle, Washington...</p>
                    </div>
                    <div className=" w-[400px] h-[200px] bg-white shadow-xl rounded-lg space-y-6  flex justify-center  items-center flex-col">
                        <h1 className=" flex items-center justify-center text-4xl bg-[#557C55] w-[50px] h-[50px] text-white rounded-full">
                            <AiFillAmazonSquare></AiFillAmazonSquare>
                        </h1>
                        <p>New York, New York; Seattle, Washington...</p>
                    </div>
                    <div className=" w-[400px] h-[200px] bg-white shadow-xl rounded-lg space-y-6  flex justify-center  items-center flex-col">
                        <h1 className=" flex items-center justify-center text-4xl bg-[#557C55] w-[50px] h-[50px] text-white rounded-full">
                            <BiLogoPaypal></BiLogoPaypal>
                        </h1>
                        <p>New York, New York; Seattle, Washington...</p>
                    </div>
                </div >
            </div >


        </div >
    );
};

export default Home;