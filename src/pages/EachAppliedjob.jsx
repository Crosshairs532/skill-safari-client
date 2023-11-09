/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const EachAppliedjob = ({ job }) => {
    const { _id,
        name,
        email,
        resume,
        Jtype

    } = job
    console.log(job);
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>

            <td>{email}</td>
            <td><a href={resume} className=" text-sky-700 font-bold">Resume Link</a></td>
            <td>{Jtype}</td>

        </tr>
    );
};

export default EachAppliedjob;