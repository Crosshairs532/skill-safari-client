/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import Update from "./Update";


const PostedJob = ({ job }) => {
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
    console.log(job);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://job-seeking-server-eight.vercel.app/allJobs/${id}`, {
                    method: "DELETE"
                })
                    .then(res =>
                        res.json()
                    )
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "You Deleted Successfully",
                            icon: "success"
                        }).then(() => {
                            location.reload();
                        });
                    })

            }
        });

    }


    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle  bg-red-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{Pname}</div>

                    </div>
                </div>
            </td>
            <td>
                {Jtitle}
                <br />
                <span className="badge badge-ghost badge-sm">{Jtype}</span>
                <span className="badge badge-ghost badge-sm">applicants:{applicants}</span>
            </td>
            <td>{postdate1}</td>
            <td>{deadline1}</td>
            <td>{salary}</td>
            <th>
                <Update job={job}></Update>
            </th>

        </tr>


    );
};

export default PostedJob;