/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FaGoogleWallet } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import moment from 'moment';
import { useEffect } from 'react';

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
        deadline1

    } = load;

    useEffect(() => {
        const currentDate = moment().format('YYYY-MM-DD');
        setToday(currentDate)
        if (today > deadline1) {

            setdisabled(true)
        }
        else {

            setdisabled(false)
        }
    }, [today, deadline1])


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className=" btn btn-secondary" onClick={() => document.getElementById('my_modal_2').showModal()}>Apply job</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h1 className=' text-6xl flex justify-center'>
                        <FaGoogleWallet></FaGoogleWallet>
                    </h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name:</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" defaultValue={user?.displayName} required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Resume:</span>
                            </label>
                            <input type="text" placeholder="Your Resume" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className={`btn btn-primary`} disabled={isDisabled}>Submit</button>
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