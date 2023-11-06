import CategorySection from "../Components/CategorySection";


const Home = () => {
    return (
        <div>

            <div className=" mt-[100px]">
                <h1 className=" text-5xl font-bold text-center">Job Info </h1>
                <div className=" container mx-auto">
                    <CategorySection></CategorySection>

                </div>
            </div>


        </div>
    );
};

export default Home;