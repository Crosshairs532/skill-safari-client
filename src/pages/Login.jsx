/* eslint-disable react/no-unescaped-entities */
import login from '../assets/login.json'
import Lottie from 'lottie-react';
import { MdMarkEmailUnread } from "react-icons/md";
import { BsKey } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const location = useLocation();
    const { logIn, SignInGoogle } = useContext(AuthContext);
    const goTo = useNavigate();
    console.log(location, "login");
    const handleSignin = async (e) => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        try {
            const res = await logIn(email, password);

            console.log(res);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });

            {
                location?.state ? goTo(location.state) : goTo('/')
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleGoogle = () => {
        SignInGoogle()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                })


                {
                    location?.state ? goTo(location.state) : goTo('/')
                }
            })
            .catch((er) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `${er.message}`
                });
            })
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

                                            {/* <input onBlur={(e) => setEmail(e.target.value)} id='email' type="email" placeholder="email" className="input w-full input-bordered" required /> */}
                                            <input name='email' id='email' type="email" placeholder="email" className="input w-full input-bordered" required />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <div className=' flex gap-4'>
                                            <label htmlFor="password">
                                                <h1 className=' text-4xl'><BsKey></BsKey></h1>
                                            </label>
                                            {/* <input onBlur={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" className="input w-full input-bordered" required /> */}
                                            <input name='password' type="password" id="password" placeholder="password" className="input w-full input-bordered" required />

                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <p className=' text-center'>Don't Have any account? <br className=' lg:hidden block md:hidden' /> <Link to='/register' className=' text-xl font-bold text-cyan-700'>Register Now</Link></p>
                            </div>
                            <div className=' bg-base-100 shadow-2xl p-3 rounded-xl'>
                                <button onClick={handleGoogle} className=' text-4xl'><FcGoogle></FcGoogle></button>
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