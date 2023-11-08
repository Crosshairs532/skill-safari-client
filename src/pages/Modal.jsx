/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaGoogleWallet } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Modal = ({ load }) => {
    const { user } = useContext(AuthContext);
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
                            <button className="btn btn-primary">Submit</button>
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