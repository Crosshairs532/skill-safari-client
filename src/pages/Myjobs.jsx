/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import auth from "../Config/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PostedJob from "../Components/PostedJob";


const Myjobs = () => {
    const { user } = useContext(AuthContext);
    const [Myjob, setJobs] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/allJobs?email=${user?.email}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setJobs(data)
            })

    }, [user?.email])
    return (
        <div className=" container mx-auto">
            <div className=" overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=' bg-slate-100'>
                        {
                            Myjob?.map(job => <PostedJob key={job._id} job={job} ></PostedJob>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary</th>
                            <th></th>

                        </tr>
                    </tfoot>

                </table>
            </div>

        </div>
    );
};

export default Myjobs;