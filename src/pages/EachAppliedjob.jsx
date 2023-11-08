/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const EachAppliedjob = ({ job }) => {
    const { _id,
        name,
        email,
        resume

    } = job
    console.log(job);
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
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>

            <td>{email}</td>
            <td>{resume}</td>

        </tr>
    );
};

export default EachAppliedjob;