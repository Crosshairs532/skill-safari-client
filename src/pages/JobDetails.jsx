/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const load = useLoaderData();
    const { _id, id,
        type,
        postedBy,
        title,
        postedDate,
        applicationDeadline,
        salary,
        applicantsNumber,
        description,
        url, } = load;
    return (
        <div>
            <h1>details hop</h1>
            <p>{description}</p>
        </div>
    );
};

export default JobDetails;