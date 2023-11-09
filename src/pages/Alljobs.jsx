import { useEffect, useState } from 'react';
import EachData from '../Components/EachData';
import SearchBar from '../Components/Search_related/SearchBar';

const Alljobs = () => {
    const [alljob, setJobs] = useState(null);
    const [searchItem, setSearchitem] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/allJobs')
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
            <div className=' flex gap-10 flex-col  lg:flex-row md:flex-row container mx-auto py-[60px]'>
                <div className=' '>
                    <h1 className=' text-xl font-bold'> Search By Keywords</h1>
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </div>
                <div className=" overflow-x-auto">
                    <table className="table block">
                        {/* head */}
                        <thead className=' hidden lg:block md:block'>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th>Job Posting Date</th>
                                <th>Application Deadline</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className=' bg-slate-100 block w-full'>
                            {
                                searchItem?.map(job => <EachData key={job._id} job={job} ></EachData>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot className=' hidden lg:block md:block'>
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
        </div>






    );
};

export default Alljobs;