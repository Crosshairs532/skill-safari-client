/* eslint-disable no-unused-vars */
import { FaGoogleWallet } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const load = useLoaderData();
    const { _id,
        image,
        Pname,
        Jtitle,
        salary,
        Jtype,
        applicants,
        description,
        postdate1,
        deadline1

    } = load;
    return (
        <div className=" container mx-auto font-poppins">
            <Helmet>
                <title>SkillSafari | Job Details</title>
            </Helmet>
            <div className=" space-y-4">
                <div className=" hidden lg:block md:block">
                    <img className=" w-full object-cover h-[300px]" src={image} alt="" />
                </div>
                <div className=" flex flex-col px-3 lg:flex-row md:flex-row md:justify-between lg:justify-between justify-evenly mt-24">
                    <h1 className=" text-3xl font-bold">{Jtitle}</h1>
                    {/* <button className=" btn btn-secondary">Apply Now</button> */}
                    <Modal load={load} ></Modal>


                </div>
                <div className=" flex gap-3 flex-col justify-center  items-center">
                    <div className="logo">
                        <h1 className=' text-6xl'>
                            <FaGoogleWallet></FaGoogleWallet>
                        </h1>
                    </div>
                    <div className=" info flex flex-col space-y-2 items-center">
                        <h1 className=" text"> Posted by:{Pname}</h1>
                        <div className=" flex gap-2 items-center">
                            <p className=" outline outline-1 p-2 rounded-lg">{Jtype}</p>
                            <p>{salary}</p>
                            <p>Already applied:{applicants}</p>
                        </div>
                    </div>

                </div>
                <div className=" px-5 text-justify">
                    <h1 className=" text-3xl">Description:</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};


export default JobDetails;