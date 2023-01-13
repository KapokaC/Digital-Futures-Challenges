import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import bird from '../../images/bird.png';
import girl1 from '../../images/girl1.jpg';

const Login = ({ setUser }) => {

    const navigate = useNavigate();

    const [loginUser, setLoginUser] = useState({
        email: ``,
        password: ``,
        userName: ``
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = e => {
        const { name, value } = e.target;
        setLoginUser({
            ...loginUser,
            [name]: value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        postLogin(loginUser);
    };

    const postLogin = async loginUser => {
        const res = await axios.post(`http://localhost:4000/login`, loginUser);
        alert(res.data.message);
        setUser(res.data.user);
        resetLogin();
        setLoggedIn(res.data.user ? true : false);
        if (res.data.user) navigate("/addPeep")
    };

    const resetLogin = () => setLoginUser({ userName: ``, email: ``, password: `` });


    return (
        <>
            <div className='container'>
                <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">

                                                <div className="text-center">
                                                    {<img src={bird} width="185" alt='bird' />}
                                                    <h4 className="mt-1 mb-5 pb-1">We are The Chitter Team</h4>
                                                </div>

                                                <form onSubmit={submitHandler}>
                                                    <p>Please login to your account</p>

                                                    <div className="form-outline mb-4">
                                                        <input type="text" id="userName" className="form-control" name="userName" value={loggedIn.userName} onChange={loginHandler} placeholder="Usename" />
                                                        <label className="form-label" htmlFor="userName">Username:</label>
                                                    </div>


                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="sign-in-email" className="form-control" name="email" value={loggedIn.email} onChange={loginHandler} placeholder="Your email" />
                                                        <label className="form-label" htmlFor="sign-in-email">Email:</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="sign-in-password" className="form-control" name="password" value={loggedIn.password} onChange={loginHandler} placeholder="Your password" />
                                                        <label className="form-label" htmlFor="sign-in-password">Password:</label>
                                                    </div>

                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Login</button>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <Link to="/register" className="mb-0 me-2">Don't have an account?</Link>
                                                        <Link to="/register"><button className='btn btn-outline-danger'>Create New</button></Link>
                                                    </div>

                                                </form>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4">We are more than just a company. We are Chitter</h4>
                                                <p className="small mb-0">A journey of a thousand peeps begins with a single peep. </p>
                                                {<img src={girl1} width="400" height={550} className='img-fluid' alt='girl' />}
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

    );
}

export default Login;
