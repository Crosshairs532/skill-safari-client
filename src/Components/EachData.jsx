/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const EachData = ({ job }) => {
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
    const handleDetails = (id) => {
        fetch(`http://localhost:4000/allJobs/details?id=${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (

        <tr className=" text-[#2a4019]">
            <th>
                <label>
                    {/* <input type="checkbox" className="checkbox" /> */}
                    <img src={image} className=" w-[20px] object-cover h-[20px]" alt="" />
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
                <div className=" flex flex-col gap-1">
                    <span className="badge badge-ghost badge-sm outline outline-1 outline-cyan-700 text-cyan-700  h-auto">{Jtype}</span>
                    <span className="badge badge-ghost badge-sm outline outline-1 outline-cyan-700 text-cyan-700">Applicants:{applicants}</span>
                </div>
            </td>
            <td className="">{description.slice(0, 10)}..</td>
            <td>{postdate1}</td>
            <td>{deadline1}</td>
            <td>{salary}</td>
            <th>
                <Link to={`/details/${_id}`}> <button onClick={() => handleDetails(_id)} className="btn btn-outline btn-info">View Details</button></Link>
            </th>
        </tr>


    );
};

export default EachData;