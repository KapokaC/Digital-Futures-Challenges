import { Link } from "react-router-dom";

const SinglePeep = ({ peepProps }) => {
    const { userName, datePosted, peepBody } = peepProps;
    const dDate = new Date(datePosted).toDateString();
    const dTime = new Date(datePosted).toLocaleTimeString();

    return (
        <>
            <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                <div className="container py-4 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="card-body p-md-5 mx-md-4">

                                    <div className="form-outline mb-4">
                                        <h4> {userName} peeped: </h4>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <h5> {peepBody} </h5>
                                        <p> {dDate} at {dTime}</p>
                                    </div>
                                    <div>
                                        <Link to="/addPeep"><button className='btn btn-outline-danger'>Post Peep</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}

export default SinglePeep;
