
// import SearchBar from '../Components/Search_related/SearchBar';
import { useEffect, useState } from 'react';
import EachAppliedjob from './EachAppliedjob';
import { CgLaptop } from 'react-icons/cg';

const Appliedjobs = () => {
    const [alljob, setJobs] = useState(null);
    const [searchItem, setSearchitem] = useState([]);
    const [selectedValue, setSelectedValue] = useState('All');
    console.log(alljob, "all jobs");
    useEffect(() => {
        fetch('http://localhost:4000/appliedjobs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data);
                setSearchitem(data)
            })

    }, [])

    // const handleSearch = (query) => {
    //     console.log(query, "search");
    //     if (query) {
    //         const filteredJobs =
    //             alljob.filter((job) => job.Jtype.toLowerCase().includes(query.toLowerCase()));
    //         console.log(filteredJobs, "why man");
    //         setSearchitem(filteredJobs)

    //     } else {
    //         console.log("hi there");
    //         setSearchitem(alljob)
    //     }

    // };

    const handleChange = (e) => {
        const newlySelectedValue = e.target.value;

        if (newlySelectedValue != 'All') {
            const filteredJobs = alljob?.filter((job) => job.Jtype.toLowerCase().includes(newlySelectedValue.toLowerCase()));
            console.log(filteredJobs, "why man");
            setSearchitem(filteredJobs);
        } else {
            console.log("hi there");
            setSearchitem(alljob);
        }

        setSelectedValue(newlySelectedValue);
    };



    return (
        <div className='  min-h-screen'>
            <div className=' flex gap-10 flex-col lg:flex-row justify-evenly md:flex-row container mx-auto py-[60px]'>
                {/* <div>
                    <h1 className=' text-xl font-bold'> Search By Keywords</h1>
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </div> */}

                <div className=' select-field'>
                    <label htmlFor="select">Select Job Type:</label>
                    <select value={selectedValue} onChange={handleChange}>
                        <option value="">All Jobs</option>
                        <option value="On Site">On Site</option>
                        <option value="Hybrid">Hybrid-jobs</option>
                        <option value="Part-Time">Part Time Jobs</option>
                        <option value="Remote">Remote Jobs</option>
                    </select>

                </div>
                <div className="overflow-x-auto w-full">
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
                                <th>Email</th>
                                <th>Resume Link</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className=' bg-slate-100'>
                            {
                                searchItem?.map(job => <EachAppliedjob key={job._id} job={job} ></EachAppliedjob>)
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Resume Link</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>

            </div>
        </div>




    );
};

export default Appliedjobs;