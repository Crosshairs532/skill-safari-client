

/* eslint-disable no-unused-vars */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Datepicker from "./Datepicker";
const Addjob = () => {
    const { user } = useContext(AuthContext);
    const [deadline, setDeadline] = useState(new Date());
    const [postdate, setPostdate] = useState(new Date());
    const handleProduct = (e) => {
        e.preventDefault();
        const image = e.target.Bphoto.value;
        const Pname = e.target.Pname.value;
        const Jtitle = e.target.Jtitle.value;
        const salary = e.target.salary.value;
        const Jtype = e.target.Jtype.value;
        const description = e.target.description.value;
        const applicants = parseInt(e.target.vacancy.value);
        const postdate1 = postdate.toISOString().split('T')[0];
        const deadline1 = deadline.toISOString().split('T')[0];
        const EachJob = { image, Pname, Jtitle, salary, Jtype, applicants, description, postdate1, deadline1, Pemail: user.email };
        console.log(EachJob);
        fetch('http://localhost:4000/allJobs', {

            method: "POST",
            headers: {
                "content-type": 'application/json'
            }
            ,
            body: JSON.stringify(EachJob)
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Job added',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset();
            })

    }
    return (
        <div>

            <div className="min-h-screen p-6 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h1 className=" text-white  md:text-6xl text-3xl lg:text-6xl text-center font-oxanium font-bold" >Add Products</h1>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div>
                                    <h1 className=" text-5xl "> SkillSafari</h1>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handleProduct}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-2 ">
                                                <label htmlFor="Pname" className=" text-xl font-bold">Post By:</label>
                                                <input type="text" name="Pname" id="Pname" placeholder=" post Your name... " defaultValue={user?.displayName} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>
                                            <div className="md:col-span-3 ">
                                                <label htmlFor="Bphoto" className=" text-xl font-bold">Job Banner</label>
                                                <input type="text" name="Bphoto" id="Bphoto" placeholder=" photo url..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-5 ">
                                                <label htmlFor="Jtitle" className="text-xl font-bold">Job Title:</label>
                                                <input type="text" name="Jtitle" id="Jtitle" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" type brand name" />
                                            </div>

                                            <div className="md:col-span-3 ">
                                                <label htmlFor="Jtype" className=" text-xl font-bold">Job Category:</label> <br />
                                                <select name="Jtype" id="Jtype" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                    <option >Remote</option>
                                                    <option >Part-Time </option>
                                                    <option >On Site</option>
                                                    <option >Hybrid</option>

                                                </select>
                                            </div>

                                            <div className="md:col-span-2 ">
                                                <label htmlFor="salary" className=" text-xl font-bold">Salary Range:</label>
                                                <input type="text" name="salary" id="salary" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="salary.." />
                                            </div>
                                            <div className=" md:col-span-5 ">
                                                <label htmlFor="description">Job Description:</label>
                                                <textarea name="description" id="description" cols="30" rows="10" className=" bg-slate-50 w-full px-3 py-2" placeholder="Enter job description..."></textarea>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="date" className=" mr-2">Application Deadline:</label>
                                                <DatePicker
                                                    dateFormat="yyyy/MM/dd"
                                                    showIcon
                                                    selected={deadline}
                                                    onChange={(date) => setDeadline(date)}
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="date1" className=" mr-2">Application Posting date:</label>
                                                <DatePicker
                                                    dateFormat="yyyy/MM/dd"
                                                    showIcon
                                                    selected={postdate}
                                                    onChange={(date) => setPostdate(date)}
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="vacancy" className=" mr-2">Job Applicants:</label>
                                                <input type="text" id="vacancy" defaultValue={0} name="vacancy" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" Job vacancy.." />
                                            </div>


                                            <div className="md:col-span-5 text-right ">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-[coral] hover:bg-[#a14828] text-white font-bold py-2 px-4 rounded">Add Job</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Addjob;




