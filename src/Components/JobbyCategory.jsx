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
        fetch(`http://localhost:4000/allJobs/details?id=${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div className=" p-7 w-[400px] bg-base-100 shadow-xl space-y-5 rounded-lg">
                <div className=' flex justify-between items-center'>
                    <div>
                        <h1 className=' text-4xl'>
                            <FaGoogleWallet></FaGoogleWallet>
                        </h1>
                    </div>
                    <div className=' flex gap-3'>
                        <h1 className=' text-2xl'>
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
                    <h2 className=" text-2xl font-bold">{Jtitle}</h2>
                    <p className=" text-sm">by {Pname}</p>
                    <p>Posted Date: {postdate1}</p>
                </div>
                <div className=" flex justify-around items-center gap-3">
                    <button className="btn btn-outline bg-red-200 p-3 rounded-2xl  w-[100px]">{Jtype}</button>
                    <p>Job Id: {applicants}</p>
                    <p className=" btn btn-outline">{salary}</p>


                </div>

                <div className=" flex justify-between items-center">
                    <h3>Deadline: {deadline1}</h3>
                    <Link to={`details/${_id}`}> <button onClick={() => handleDetails(_id)} className="btn btn-primary">View Details</button></Link>
                </div>

            </div>
        </div >
    );
};

export default JobbyCategory;
