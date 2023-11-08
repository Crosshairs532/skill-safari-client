import React, { useEffect, useState } from 'react';
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
        console.log(query);
        if (query) {
            const filteredJobs =
                alljob.filter((job) => job.title.toLowerCase().includes(query.toLowerCase()));
            console.log(filteredJobs, "why man");
            setSearchitem(filteredJobs)

        } else {
            setSearchitem(alljob)
        }

    };







    return (
        <div>
            <SearchBar onSearch={handleSearch}></SearchBar>
            <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
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
                    <tbody>
                        {
                            searchItem?.map(job => <EachData key={job.id} job={job} ></EachData>)
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

export default Alljobs;