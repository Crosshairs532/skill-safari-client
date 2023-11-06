import login from '../assets/login.json'
import Lottie from 'lottie-react';
import { MdMarkEmailUnread } from "react-icons/md";
import { BsKey } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { logIn } = useContext(AuthContext);
    const goTo = useNavigate();
    const handleSignin = async (e) => {

        e.preventDefault()
        console.log(email, password);

        try {
            const res = await logIn(email, password);

            console.log(res);
            goTo('/')
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className=" relative">
                <h1 className=" -z-10 absolute -top-[100px] left-6 hidden lg:block lg:text-[200px] text-center opacity-5">Login</h1>
                <div className="hero min-h-screen">

                    <div className="hero-content flex-col lg:flex-row md:flex-row justify-between gap-11">
                        <div className=' flex gap-4'>
                            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                                <h1 className=' text-4xl text-center mt-3'>Login</h1>
                                <form onSubmit={handleSignin} className="card-body space-y-5">
                                    <div className="form-control">
                                        <div className=' flex items-center gap-4'>
                                            <label htmlFor="email"><h1 className=' text-4xl'><MdMarkEmailUnread></MdMarkEmailUnread></h1></label>

                                            <input onBlur={(e) => setEmail(e.target.value)} id='email' type="email" placeholder="email" className="input w-full input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <div className=' flex gap-4'>
                                            <label htmlFor="password">
                                                <h1 className=' text-4xl'><BsKey></BsKey></h1>
                                            </label>
                                            <input onBlur={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" className="input w-full input-bordered" required />

                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <p className=' text-center'>Don't Have any account? <br className=' lg:hidden block md:hidden' /> <Link to='/register' className=' text-xl font-bold text-cyan-700'>Register Now</Link></p>
                            </div>
                            <div className=' bg-base-100 shadow-2xl p-3 rounded-xl'>
                                <button className=' text-4xl'><FcGoogle></FcGoogle></button>
                            </div>
                        </div>
                        <div className=' hidden lg:block md:block'>
                            <Lottie animationData={login} loop={true}></Lottie>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;