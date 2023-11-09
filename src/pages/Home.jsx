import CategorySection from "../Components/CategorySection";
import { CgProfile } from 'react-icons/cg'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiOutlineLogin } from 'react-icons/ai'
const Home = () => {
    return (
        <div>

            <div className=" pt-[100px]">
                <h1 className=" text-5xl font-bold text-center font-poppins text-[#557C55]">Job Info </h1>
                <div className=" container mx-auto">
                    <CategorySection></CategorySection>

                </div>
            </div>
            <div className=" min-h-screen space-y-[100px]">
                <h1 className=" text-7xl text-center font-poppins font-bold text-[#345734]"> How it's works</h1>
                <div className=" flex justify-center gap-5">
                    <div className=" text-center flex justify-center flex-col space-y-6 w-[400px] items-center">
                        <h1 className=" text-7xl text-[#A6CF98]"> <CgProfile></CgProfile></h1>
                        <h1 className=" text-4xl font-poppins font-bold">   Create Account</h1>
                        <p> It’s very easy to open an account and start your journey.</p>
                    </div>
                    <div className=" text-center flex justify-center flex-col space-y-6 w-[400px] items-center">
                        <h1 className=" text-7xl text-[#A6CF98]"><BsFillPencilFill /> </h1>
                        <h1 className=" text-4xl font-poppins font-bold">   Create Account</h1>
                        <p> It’s very easy to open an account and start your journey.</p>
                    </div>
                    <div className=" text-center flex justify-center flex-col space-y-6 items-center w-[400px]">
                        <h1 className=" text-7xl text-[#A6CF98]"><AiOutlineLogin></AiOutlineLogin> </h1>
                        <h1 className=" text-4xl font-poppins font-bold"> Apply job or hire
                        </h1>
                        <p> Apply & get your preferable jobs with all the requirements and get it.</p>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Home;