import { createBrowserRouter, } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Components/Error";
import Alljobs from "../pages/Alljobs";
import Appliedjobs from "../pages/Appliedjobs";
import Myjobs from "../pages/Myjobs";
import Home from "../pages/Home";
import Addjob from "../pages/Addjob";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from '../PrivateRoute/PrivateRoute'

import Blog from "../pages/Blog";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/alljob',
                element: <Alljobs></Alljobs>
            },
            {
                path: '/appliedjob',

                element: <Appliedjobs></Appliedjobs>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            ,
            {
                path: '/myjob',
                loader: () => fetch('http://localhost:4000/appliedjobs'),
                element: <Myjobs></Myjobs>
            },
            {
                path: '/addjob',
                element: <Addjob></Addjob>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:4000/allJobs/details?id=${params.id}`),
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
            }

        ]
    }
])
export default router;