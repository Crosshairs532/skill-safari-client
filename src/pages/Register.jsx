
import login from '../assets/login.json'
import Lottie from 'lottie-react';
import { MdMarkEmailUnread } from "react-icons/md";
import { BsKey } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { HiPhotograph } from 'react-icons/hi'
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import auth from '../Config/firebase.config';
const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await createUser(email, password);
            console.log(res, "response");
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            })
                .then(() => { })
                .catch((er) => { console.log(er); })
            toast.success('Successfully created!');
        }
        catch (error) {
            console.log(error, "Registration error");
        }

        console.log(email, name, password, photo);
    }
    return (
        <div>
            <div className=" relative">
                <h1 className=" -z-10 absolute -top-[100px] left-6 hidden lg:block lg:text-[200px] text-center opacity-5">Register Now</h1>
                <div className="hero min-h-screen">

                    <div className="hero-content flex-col lg:flex-row md:flex-row justify-between gap-11">
                        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className=' text-4xl text-center mt-3'>Register Now</h1>
                            <form onSubmit={handleRegister} className="card-body space-y-5">
                                <div className="form-control">
                                    <div className=' flex items-center gap-4'>
                                        <label htmlFor="photo">
                                            <h1 className=' text-4xl'><HiPhotograph></HiPhotograph></h1>
                                        </label>
                                        <input onBlur={(e) => setPhoto(e.target.value)} id='photo' type="text" placeholder="Enter Your photo URL.." className="input w-full input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className=' flex items-center gap-4'>
                                        <label htmlFor="name">
                                            <h1 className=' text-4xl'><CgProfile></CgProfile></h1>
                                        </label>
                                        <input onBlur={(e) => setName(e.target.value)} id='name' type="text" placeholder="Enter Your Name..." className="input w-full input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className=' flex items-center gap-4'>

                                        <label htmlFor="email"><h1 className=' text-4xl'><MdMarkEmailUnread></MdMarkEmailUnread></h1></label>

                                        <input onBlur={(e) => setEmail(e.target.value)} id='email' type="email" placeholder="Enter Your Email..." className="input w-full input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className=' flex gap-4'>
                                        <label htmlFor=" password">
                                            <h1 className=' text-4xl'><BsKey></BsKey></h1>
                                        </label>
                                        <input onBlur={(e) => setPassword(e.target.value)} type="password" id="password" placeholder=" Enter password...." className="input w-full input-bordered" required />

                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Register Now</button>
                                </div>
                            </form>
                            <p className=' text-center'>Already Have any account? <Link className=' text-xl font-bold' to="/login">Login</Link></p>
                        </div>
                        <div className=' hidden lg:block md:block'>
                            <Lottie animationData={login} loop={true}></Lottie>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default Register;