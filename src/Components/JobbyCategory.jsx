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
    const { id,
        type,
        postedBy,
        title,
        postedDate,
        applicationDeadline,
        salary,
        applicantsNumber,
        description,
        url, } = job
    // const handleDetails = () => {
    //     if (!user) {
    //         const swalWithBootstrapButtons = Swal.mixin({
    //             customClass: {
    //                 confirmButton: "btn btn-success",
    //                 cancelButton: "btn btn-danger"
    //             },
    //             buttonsStyling: false
    //         });
    //         swalWithBootstrapButtons.fire({
    //             title: "Are you sure?",
    //             text: "You won't be able to revert this!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonText: "Yes, delete it!",
    //             cancelButtonText: "No, cancel!",
    //             reverseButtons: true
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 swalWithBootstrapButtons.fire({
    //                     title: "Deleted!",
    //                     text: "Your file has been deleted.",
    //                     icon: "success"
    //                 });
    //             } else if (
    //                 /* Read more about handling dismissals below */
    //                 result.dismiss === Swal.DismissReason.cancel
    //             ) {
    //                 swalWithBootstrapButtons.fire({
    //                     title: "Cancelled",
    //                     text: "Your imaginary file is safe :)",
    //                     icon: "error"
    //                 });
    //             }
    //         });
    //     }
    //     else {

    //     }
    // }
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
                    <h2 className=" text-2xl font-bold">{title}</h2>
                    <p className=" text-sm">by {postedBy}</p>
                    <p>Posted Date: {postedDate}</p>
                </div>
                <div className=" flex justify-around items-center gap-3">
                    <button className="btn btn-outline bg-red-200 p-3 rounded-2xl w-[100px]"><h3>{type}</h3></button>
                    <p>Job Id: {id}</p>
                    <p className=" btn btn-outline">{salary}</p>


                </div>

                <div className=" flex justify-between items-center">
                    <h3>Deadline: {applicationDeadline}</h3>
                    <Link to='details'> <button className="btn btn-primary">View Details</button></Link>
                </div>

            </div>
        </div >
    );
};

export default JobbyCategory;
