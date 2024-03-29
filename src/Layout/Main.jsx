import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";


const Main = () => {
    const location = useLocation();
    return (
        <div>
            <div className={`${location.pathname == '/' ? " banner min-h-screen" : ""} bg-[#F2FFE9]`}>
                <Header></Header>
                {
                    location.pathname == '/' && <Banner></Banner>
                }
            </div>
            <div className=" min-h-screen bg-[#fafff678] ">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;