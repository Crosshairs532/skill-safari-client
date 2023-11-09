import { useEffect, useState } from 'react';
import EachData from '../Components/EachData';
import SearchBar from '../Components/Search_related/SearchBar';
import { Helmet } from 'react-helmet-async';

const Alljobs = () => {
    const [alljob, setJobs] = useState(null);
    const [searchItem, setSearchitem] = useState();

    useEffect(() => {
        fetch('https://job-seeking-server-eight.vercel.app/allJobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setSearchitem(data)
            })

    }, [])

    const handleSearch = (query) => {
        console.log(query, "search");
        if (query) {
            const filteredJobs =
                alljob.filter((job) => job.Jtitle.toLowerCase().includes(query.toLowerCase()));
            console.log(filteredJobs, "why man");
            setSearchitem(filteredJobs)

        } else {
            setSearchitem(alljob)
        }

    };




    return (
        <div className='  min-h-screen'>
            <Helmet>
                <title>SkillSafari | All Jobs</title>
            </Helmet>
            <div className=' flex gap-10 flex-col lg:flex-row md:flex-row container mx-auto py-[60px]'>
                <div className=' text-center md:text-left lg:text-left'>
                    <h1 className=' text-xl font-bold'> Search By Keywords</h1>
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </div>
                <div className=" overflow-x-auto rounded-md">
                    <table className="table ">
                        {/* head */}
                        <thead className=' bg-[#557C55] text-[#F2FFE9]'>
                            <tr>
                                <th>

                                </th>
                                <th>Posted BY</th>
                                <th>Job Title</th>
                                <th>Description</th>
                                <th>Job Posting Date</th>
                                <th>Application Deadline</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className=' bg-slate-100 '>
                            {
                                searchItem?.map(job => <EachData key={job._id} job={job} ></EachData>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot className=' bg-[#557C55] text-[#F2FFE9]'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>Description</th>
                                <th>Job Posting Date</th>
                                <th>Application Deadline</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>

            </div>
        </div>






    );
};

export default Alljobs;