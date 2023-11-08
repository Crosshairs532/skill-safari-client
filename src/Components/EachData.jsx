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

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
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
                <Link to={`/details/${_id}`}> <button onClick={() => handleDetails(_id)} className="btn btn-outline btn-info">View Details</button></Link>
            </th>
        </tr>


    );
};

export default EachData;