/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FaGoogleWallet } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import moment from 'moment';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Modal = ({ load }) => {
    const { user } = useContext(AuthContext);
    const [isDisabled, setdisabled] = useState(true);
    const [today, setToday] = useState();
    const { _id,
        image,
        Pname,
        Jtitle,
        salary,
        Jtype,
        applicants,
        description,
        postdate1,
        deadline1,
        Pemail

    } = load;

    useEffect(() => {
        const currentDate = moment().format('YYYY-MM-DD');
        setToday(currentDate)
        if (today > deadline1) {

            setdisabled(true)
        }
        else {
            if (Pemail == user?.email) {
                setdisabled(true)
            }
            else {
                setdisabled(false)
            }
        }
    }, [today, deadline1, Pemail, user?.email])

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const resume = e.target.resume.value;
        const job = { name, email, resume, _id, Jtype }
        fetch(`http://localhost:4000/appliedjobs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(job)
        })
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have applied jobs succesfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(er => console.log(er))
    }
    return (
        <div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className=" btn btn-secondary" onClick={() => document.getElementById('my_modal_2').showModal()}>Apply Now</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h1 className=' text-6xl flex justify-center'>
                        <FaGoogleWallet></FaGoogleWallet>
                    </h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name:</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" defaultValue={user?.displayName} required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Resume:</span>
                            </label>
                            <input type="text" name='resume' placeholder="Your Resume" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className={`btn btn-primary`} disabled={isDisabled}>Submit</button>
                        </div>
                    </form>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div >
    );
};

export default Modal;