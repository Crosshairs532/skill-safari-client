/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Update = ({ job }) => {
    const [deadline, setDeadline] = useState(new Date());
    const [postdate, setPostdate] = useState(new Date());
    const { _id,
        image,
        Pname,
        Jtitle,
        salary,
        Jtype,
        applicants,
        description,
        postdate1,
        deadline1

    } = job
    const { user } = useContext(AuthContext)

    const handleUpdate = (e) => {

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
        const EachJob = { image, Pname, Jtitle, salary, Jtype, applicants, description, postdate1, deadline1 };


        fetch(`http://localhost:4000/allJobs/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application-json"
            },
            body: JSON.stringify(EachJob)
        })
            .then()
            .then()
    }


    return (
        <div>
            <button className="btn bg-green-600 text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Update</button><dialog id="my_modal_1" className="modal">
                <div className="modal-box  max-w-fit">
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
                                            <form onSubmit={handleUpdate}>
                                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                    <div className="md:col-span-2 ">
                                                        <label htmlFor="Pname" className=" text-xl font-bold">Post By:</label>
                                                        <input type="text" name="Pname" id="Pname" placeholder=" post Your name... " defaultValue={Pname} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                    </div>
                                                    <div className="md:col-span-3 ">
                                                        <label htmlFor="Bphoto" className=" text-xl font-bold">Job Banner</label>
                                                        <input type="text" name="Bphoto" id="Bphoto" defaultValue={image} placeholder=" photo url..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                                    </div>

                                                    <div className="md:col-span-5 ">
                                                        <label htmlFor="Jtitle" className="text-xl font-bold">Job Title:</label>
                                                        <input type="text" name="Jtitle" id="Jtitle" defaultValue={Jtitle} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" type brand name" />
                                                    </div>

                                                    <div className="md:col-span-3 ">
                                                        <label htmlFor="Jtype" className=" text-xl font-bold">Job Category:</label> <br />
                                                        <select name="Jtype" defaultValue={Jtype} id="Jtype" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                            <option >Remote</option>
                                                            <option >Part-Time </option>
                                                            <option >On Site</option>
                                                            <option >Hybrid</option>

                                                        </select>
                                                    </div>

                                                    <div className="md:col-span-2 ">
                                                        <label htmlFor="salary" className=" text-xl font-bold">Salary Range:</label>
                                                        <input type="text" name="salary" defaultValue={salary} id="salary" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="salary.." />
                                                    </div>
                                                    <div className=" md:col-span-5 ">
                                                        <label htmlFor="description">Job Description:</label>
                                                        <textarea name="description" defaultValue={description} id="description" cols="30" rows="10" className=" bg-slate-50 w-full px-3 py-2" placeholder="Enter job description..."></textarea>
                                                    </div>
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="date" className=" mr-2">Application Deadline:</label>
                                                        <DatePicker defaultValue={deadline1}
                                                            dateFormat="yyyy/MM/dd"
                                                            showIcon
                                                            selected={deadline}
                                                            onChange={(date) => setDeadline(date)}
                                                        />
                                                    </div>
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="date1" className=" mr-2">Application Posting date:</label>
                                                        <DatePicker defaultValue={postdate1}
                                                            dateFormat="yyyy/MM/dd"
                                                            showIcon
                                                            selected={postdate}
                                                            onChange={(date) => setPostdate(date)}
                                                        />
                                                    </div>
                                                    <div className="md:col-span-2">
                                                        <label htmlFor="vacancy" className=" mr-2">Job Applicants:</label>
                                                        <input type="text" id="vacancy" defaultValue={applicants} name="vacancy" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" Job vacancy.." />
                                                    </div>


                                                    <div className="md:col-span-5 text-right ">
                                                        <div className="inline-flex items-end">
                                                            <button className="bg-[coral] hover:bg-[#a14828] text-white font-bold py-2 px-4 rounded">Submit</button>
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
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Update;