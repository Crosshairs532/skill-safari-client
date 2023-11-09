
import login from '../assets/login.json'
import Lottie from 'lottie-react';
import { MdMarkEmailUnread } from "react-icons/md";
import { BsKey } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HiPhotograph } from 'react-icons/hi'
import { AuthContext } from '../AuthProvider/AuthProvider';
// import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
// import auth from '../Config/firebase.config';
const Register = () => {
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [photo, setPhoto] = useState('');
    const goTo = useNavigate();
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(email, name, password, photo);

        createUser(email, password)
            .then(res => {
                console.log(res, "response");
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((er) => { console.log(er); })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

                goTo('/')
                setTimeout(() => {
                    location.reload();
                }, 1500);
                // location.reload();


            })
            .catch(er => {
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
            <Helmet>
                <title>SkillSafari | Registration</title>
            </Helmet>
            <div className=" relative">
                <h1 className=" -z-10 absolute -top-[100px] left-6 hidden lg:block lg:text-[200px] text-center opacity-5">Register Now</h1>
                <div className="hero min-h-screen">

                    <div className="hero-content flex-col lg:flex-row md:flex-row justify-between gap-11 font-poppins">
                        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className=' text-4xl text-center mt-3'>Register Now</h1>
                            <form onSubmit={handleRegister} className="card-body space-y-5">
                                <div className="form-control">
                                    <div className=' flex items-center gap-4'>
                                        <label htmlFor="photo">
                                            <h1 className=' text-4xl'><HiPhotograph></HiPhotograph></h1>
                                        </label>
                                        {/* <input onBlur={(e) => setPhoto(e.target.value)} id='photo' type="text" placeholder="Enter Your photo URL.." className="input w-full input-bordered" required /> */}
                                        <input name='photo' id='photo' type="text" placeholder="Enter Your photo URL.." className="input w-full input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className=' flex items-center gap-4'>
                                        <label htmlFor="name">
                                            <h1 className=' text-4xl'><CgProfile></CgProfile></h1>
                                        </label>
                                        {/* <input onBlur={(e) => setName(e.target.value)} id='name' type="text" placeholder="Enter Your Name..." className="input w-full input-bordered" required /> */}
                                        <input name='name' id='name' type="text" placeholder="Enter Your Name..." className="input w-full input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className=' flex items-center gap-4'>

                                        <label htmlFor="email"><h1 className=' text-4xl'><MdMarkEmailUnread></MdMarkEmailUnread></h1></label>

                                        {/* <input onBlur={(e) => setEmail(e.target.value)} id='email' type="email" placeholder="Enter Your Email..." className="input w-full input-bordered" required /> */}
                                        <input name='email' id='email' type="email" placeholder="Enter Your Email..." className="input w-full input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className=' flex gap-4'>
                                        <label htmlFor=" password">
                                            <h1 className=' text-4xl'><BsKey></BsKey></h1>
                                        </label>
                                        <input name='password' type="password" id="password" placeholder=" Enter password...." className="input w-full input-bordered" required />

                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Register Now</button>
                                </div>
                            </form>
                            <p className=' text-center font-poppins pb-2'>Already Have any account? <Link className=' text-xl font-bold' to="/login">Login</Link></p>
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