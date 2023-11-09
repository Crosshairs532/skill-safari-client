/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaGoogleWallet } from 'react-icons/fa'
import { TbUrgent } from 'react-icons/tb'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { MdFeaturedVideo } from 'react-icons/md'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
const JobbyCategory = ({ job }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    console.log(job, "job by category");
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

    } = job
    const handleDetails = (id) => {
        fetch(`https://job-seeking-server-eight.vercel.app/allJobs/details?id=${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div className=" p-7 lg:w-auto w-[350px] bg-[#fbfffb] font-poppins shadow-2xl space-y-5 outline outline-1 outline-[#FA7070] duration-100 hover:outline-[#557C55] rounded-lg">
                <div className=' flex justify-between items-center'>
                    <div>
                        <h1 className=' text-4xl text-[#FA7070]'>
                            <FaGoogleWallet></FaGoogleWallet>
                        </h1>
                    </div>
                    <div className=' flex gap-3'>
                        <h1 className=' text-2xl text-[#7077fa]'>
                            <TbUrgent></TbUrgent>
                        </h1>
                        <h1 className=' text-2xl'>
                            <BsFillJournalBookmarkFill></BsFillJournalBookmarkFill>
                        </h1>
                        <h1 className=' text-2xl'>
                            <MdFeaturedVideo></MdFeaturedVideo>
                        </h1>

                    </div>
                </div>

                <div>
                    <h2 className=" text-2xl font-bold font-poppins text-[#557C55]">{Jtitle}</h2>
                    <p className=" text-sm">by {Pname}</p>

                </div>
                <div className=" flex justify-around items-center gap-3">
                    <p className=" hover:outline-orange-500 hover:text-orange-500 duration-200  outline outline-1 p-2 text-[#557C55] rounded-md">{Jtype}</p>
                    <p><span className=' font-bold'>Job Id</span>: {applicants}</p>
                    <p className=" outline outline-1 hover:outline-cyan-800 hover:text-sky-600 duration-200 p-2 rounded-md text-[#557C55]">{salary}</p>


                </div>

                <div className=" flex justify-between items-center">
                    <div>
                        <h3 ><span className=' font-bold font-poppins text-[#557C55]'>Deadline:</span> {deadline1}</h3>
                        <p  ><span className=' font-bold font-poppins text-[#557C55]'>Posted Date:</span> {postdate1}</p>
                    </div>
                    <Link to={`details/${_id}`}> <button onClick={() => handleDetails(_id)} className="btn bg-[#FA7070] text-[white]">View Details</button></Link>
                </div>

            </div>
        </div >
    );
};

export default JobbyCategory;
