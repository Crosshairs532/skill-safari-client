/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const EachData = ({ job }) => {
    const { _id, id,
        type,
        postedBy,
        title,
        postedDate,
        applicationDeadline,
        salary,
        applicantsNumber,
        description,
        url, } = job
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
                        <div className="font-bold">{postedBy}</div>

                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
                <span className="badge badge-ghost badge-sm">{type}</span>
            </td>
            <td>{postedDate}</td>
            <td>{applicationDeadline}</td>
            <td>{salary}</td>
            <th>
                <Link to={`/details/${_id}`}> <button onClick={() => handleDetails(_id)} className="btn btn-outline btn-info">View Details</button></Link>
            </th>
        </tr>


    );
};

export default EachData;