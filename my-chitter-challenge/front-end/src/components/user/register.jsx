import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import girl1 from '../../images/girl1.jpg';
import bird from '../../images/bird.png';

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {

            const user = { name: { firstName, lastName, userName }, email, password };

            if (firstName && lastName && userName && email && password) {
                let res = { data: { message: "" } };
                try {
                    res = await axios.post(`http://localhost:4000/register`, user);
                    alert(res.data.message);
                } catch (e) {
                    console.log(e.response.data.message);
                    alert(e.response.data.message);
                }
                navigate("/login");
                return;
            }
            alert(`Invalid input`);
        }
    }

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
                                                    {<img src={bird} width="185" alt='girl' />}
                                                    <h4 className="mt-1 mb-5 pb-1">Create new account</h4>
                                                </div>

                                                <form onSubmit={register}>
                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="firstname">Firstname:</label>
                                                        <input type="text" id="firstname" className="form-control" name="name" value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="Your firstname" required />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="lastname">Lastname:</label>
                                                        <input type="text" id="lastname" className="form-control" name="lastname" value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Your Lastname" required />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="username">Username:</label>
                                                        <input type="text" id="username" className="form-control" name="username" value={userName} onChange={event => setUserName(event.target.value)} placeholder="Your Username" required />

                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="email">Email:</label>
                                                        <input type="email" id="email" className="form-control" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Your email" required />
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="password">Password:</label>
                                                        <input type="password" id="password" className="form-control" name="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Your password" required />
                                                        <ul>
                                                            {(password.length < 8) && <li>Password must contain a minimum of 8 characters</li>}
                                                            {(password.match(/\d/) === null) && <li>Password must contain a number</li>}
                                                            {(password.match(/[A-Z]/) === null) && <li>Password must contain a capital letter</li>}
                                                            {(password.match(/[a-z]/) === null) && <li>Password must contain a lowercase letter</li>}
                                                        </ul>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
                                                        <input type="password" id="confirmPassword" className="form-control" name="confirmPassword" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} placeholder="Confirn your password" required />
                                                        {(confirmPassword !== password) && <p>Password does not match</p>}
                                                    </div>

                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <Link to="/login" className="mb-0 me-2">Already have an account?</Link>
                                                        <Link to="/login"><button className='btn btn-outline-danger'>Login</button></Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4"> We are more than just a gossip-site. We are Chitter</h4>
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
    )

}

export default Register;
