
// import SearchBar from '../Components/Search_related/SearchBar';
import { useContext, useEffect, useState } from 'react';
import EachAppliedjob from './EachAppliedjob';
import { CgLaptop } from 'react-icons/cg';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Appliedjobs = () => {
    const { user } = useContext(AuthContext);
    const [alljob, setJobs] = useState(null);
    const [searchItem, setSearchitem] = useState([]);
    const [selectedValue, setSelectedValue] = useState('All');
    console.log(alljob, "all jobs");
    useEffect(() => {
        fetch(`https://job-seeking-server-eight.vercel.app/appliedjobs/${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data);
                setSearchitem(data)
            })

    }, [user?.email])

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
            <Helmet>
                <title>SkillSafari | Applied Jobs</title>
            </Helmet>
            <div className=' flex gap-10 flex-col lg:flex-row justify-evenly md:flex-row container mx-auto py-[60px]'>
                {/* <div>
                    <h1 className=' text-xl font-bold'> Search By Keywords</h1>
                    <SearchBar onSearch={handleSearch}></SearchBar>
                </div> */}

                <div className=' select-field'>
                    <label htmlFor="select" className=' text-xl font-bold'>Select Job Type:</label>
                    <select value={selectedValue} className=' outline ' onChange={handleChange}>
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

                                <th>Name</th>
                                <th>Email</th>
                                <th>Resume Link</th>
                                <th>Category</th>

                            </tr>
                        </tfoot>

                    </table>
                </div>

            </div>
        </div>




    );
};

export default Appliedjobs;