/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobbyCategory from './JobbyCategory';
const CategorySection = () => {
    const [allJobs, setJobs] = useState([]);
    const [categoryWise, setCategory] = useState([]);

    useEffect(() => {
        // Fetch all jobs when the component mounts
        fetch('http://localhost:4000/allJobs')
            .then(res => res.json())
            .then(data => {
                console.log(data, "is it running?");
                setJobs(data);
            });
    }, []);

    const handleJobsSearch = (type) => {
        fetch(`http://localhost:4000/allJobs?jobtype=${type}`)
            .then(res => res.json())
            .then(data => {
                setCategory(data);
            });
    }



    return (
        <div className=' relative min-h-screen'>
            <Tabs>
                <TabList className=" text-center font-poppins">
                    <Tab onClick={() => handleJobsSearch('')}>All Jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('Remote')}>Remote Jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('Part-Time')}>Part Time Jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('Hybrid')}>Hybrid-jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('On Site')}>On Site</Tab>
                </TabList>

                <TabPanel className="">

                    <h1 className=' ' >All</h1>
                    <div className=' grid lg:grid-cols-3 gap-3 place-items-center mx-auto min-h-[70vh] '>
                        {
                            allJobs?.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }

                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Remote</h2>
                    <div className=' grid lg:grid-cols-3 gap-3 place-items-center mx-auto border-2 min-h-[70vh]'>
                        {
                            categoryWise.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Part-time</h2>
                    <div className=' grid lg:grid-cols-3 gap-3 place-items-center mx-auto border-2 min-h-[70vh]'>
                        {
                            categoryWise.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Hybrid</h2>
                    <div className=' grid lg:grid-cols-3 gap-3 place-items-center mx-auto border-2 min-h-[70vh]'>
                        {
                            categoryWise.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>on-site</h2>
                    <div className=' grid lg:grid-cols-3 gap-3 place-items-center mx-auto border-2 min-h-[70vh]'>
                        {
                            categoryWise.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }
                    </div>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default CategorySection;