/* eslint-disable react/no-unescaped-entities */
import { Helmet } from 'react-helmet-async';
import image from '../assets/code.png'

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>SkillSafari | Blogs</title>
            </Helmet>
            <div className=" container mx-auto mt-4 text-justify px-4 py-3 space-y-4">


                <h1 className=" text-3xl font-bold mb-5 px-4">Access Tokens and Refresh Tokens</h1>
                <p>
                    <strong>Access Token:</strong> An access token is a short-lived token used to authenticate and authorize a user to access specific resources or perform actions on a server or service. It is often used in OAuth 2.0 and other authentication protocols.
                </p>
                <p>
                    <strong>Refresh Token:</strong> A refresh token is a long-lived token that is used to obtain a new access token after the original access token expires. It is used to ensure that a user doesn't have to log in repeatedly.
                </p>

                <h1>Express.js</h1>
                <p>
                    <strong>Express.js:</strong> Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the creation of web servers and APIs in Node.js.
                </p>

                <h1>Nest.js</h1>
                <p>
                    <strong>Nest.js:</strong> Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It combines the best features of modern web development with the power of TypeScript.
                </p>

                <p>
                    For more information, you can visit the official websites:
                    <a className=" text-cyan-600 font-extrabold mr-1" href="https://expressjs.com/">Express.js</a> and
                    <a className=" text-cyan-600 font-extrabold mr-1" href="https://nestjs.com/">Nest.js</a>.
                </p>


                <h1 className=" text-3xl font-bold mb-5 px-4">Explaining some of my code</h1>
                <img className=' w-[400px]' src={image} alt="" />

                <p>In in picture there is a private route. Only the logged i  user can see these Routes.  So im checking here if there is any user. then im authorizing  him to see those routes by checking</p>

            </div >

        </div >
    );
};

export default Blog;