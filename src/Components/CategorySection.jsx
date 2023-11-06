/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobbyCategory from './JobbyCategory';
const CategorySection = () => {
    const [allJobs, setJobs] = useState([])
    // const [remoteJobs, setRemote] = useState([])
    // const [fullJobs, setFull] = useState([])
    // const [partJobs, setPart] = useState([])
    // const [hybridJobs, setHybrid] = useState([])
    const [categoryWise, setCategory] = useState([])
    useEffect(() => {
        fetch('../../public/jobs.json')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    const handleJobsSearch = (jobCategory) => {

        const filteredJobs = allJobs.filter(job => job.type == jobCategory)
        setCategory(filteredJobs)
    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handleJobsSearch('all')}>All Jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('Remote')}>Remote Jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('Full')}>Full Time Jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('Part')}>Part Time Jobs</Tab>
                    <Tab onClick={() => handleJobsSearch('Hybrid')}>Hybrid-jobs</Tab>
                </TabList>

                <TabPanel>
                    <>
                        <h1>panner</h1>
                        <div className=' grid lg:grid-cols-2 gap-3 place-items-center mx-auto border-2 bg-slate-600'>
                            {
                                allJobs.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                            }

                        </div>
                    </>
                </TabPanel>
                <TabPanel>
                    <h2>Remote</h2>
                    <div className=' grid lg:grid-cols-2 gap-3 place-items-center mx-auto border-2 bg-slate-600'>
                        {
                            categoryWise.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Full</h2>
                    <div className=' grid lg:grid-cols-2 gap-3 place-items-center mx-auto border-2 bg-slate-600'>
                        {
                            categoryWise.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Part</h2>
                    <div className=' grid lg:grid-cols-2 gap-3 place-items-center mx-auto border-2 bg-slate-600'>
                        {
                            categoryWise.map((job, idx) => <JobbyCategory key={idx} job={job}></JobbyCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Hybrid</h2>
                    <div className=' grid lg:grid-cols-2 gap-3 place-items-center mx-auto border-2 bg-slate-600'>
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