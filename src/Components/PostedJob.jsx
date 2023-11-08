/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

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



    return (

        <tr>
            <th>
                <label>
                    <button className="btn btn-circle  bg-red-500 text-white">
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