import AllPeeps from "../peeps/allPeeps";

const Home = ({ peepData, getError }) => {

    return (
        <>
            <div className="container">
                <h1 className="display-4 font-weight-bold">Welcome ... Chitters</h1>
                <AllPeeps peepData={peepData} />
            </div> :
            <div className="container">
                <h1> {getError.message}</h1>
            </div>
        </>
    );
};

export default Home;