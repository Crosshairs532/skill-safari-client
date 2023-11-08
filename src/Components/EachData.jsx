/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const EachData = ({ job }) => {
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
                <Link to='/details'> <button className="btn btn-primary">View Details</button></Link>
            </th>
        </tr>


    );
};

export default EachData;