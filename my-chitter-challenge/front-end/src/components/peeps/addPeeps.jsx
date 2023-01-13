import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPeeps = ({ getPeepData, user }) => {

    const nav = useNavigate()
    const [postPeep, setPostPeep] = useState({

        userName: ``,
        datePosted: ``,
        peepBody: ``

    })

    const date = new Date()

    const handleChange = e => {
        setPostPeep({
            userName: user.name.userName,
            datePosted: `${date}`,
            peepBody: e.target.value
        });

    }

    const addPeeps = async (e) => {
        e.preventDefault();
        console.log(postPeep);
        const res = await axios.post(`http://localhost:4000/addPeep`, postPeep);
        alert(res.data.message);
        getPeepData();
        nav("/");
    }

    return (
        <>
            <div className="container">
                <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">
                                                <div className="text-center">
                                                    <h1 className="mt-1 mb-5 pb-1"> The Chitter </h1>
                                                </div>
                                                <form onSubmit={addPeeps}>
                                                    <div className="form-outline mb-4">
                                                        <span className="font-weight-bold">  {user.name.userName} </span>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <textarea type="text" className="form-control rounded-0 p-3" id="postPeep" rows="3" placeholder="Lets peep?" name="message" value={postPeep.messages} onChange={handleChange}>
                                                        </textarea>
                                                    </div>
                                                    <input className="btn btn-outline-primary float-end" type="submit" value="Send" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4">A journey of a thousand peeps begins with a single peep.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default AddPeeps;