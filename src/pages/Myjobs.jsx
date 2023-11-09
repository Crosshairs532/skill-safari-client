/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PostedJob from "../Components/PostedJob";
import { Helmet } from "react-helmet-async";


const Myjobs = () => {
    const { user } = useContext(AuthContext);
    const [Myjob, setJobs] = useState(null);
    useEffect(() => {
        fetch(`https://job-seeking-server-eight.vercel.app/allJobs?email=${user?.email}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setJobs(data)
            })

    }, [user?.email])
    return (
        <div className=" container mx-auto font-poppins">
            <Helmet>
                <title>SkillSafari | My Jobs</title>
            </Helmet>
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