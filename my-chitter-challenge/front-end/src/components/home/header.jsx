import bird from '../../images/bird.png';
import { NavLink } from "react-router-dom";

const Header = ({ user, setUser }) => {
    if (user && user._id) {
        return (
            <>

                <div className="container mb-5">
                    <nav className="navbar fixed-top px-5 bg-dark">
                        <div className="container mb-5-fluid mb-2 mb-lg-0">
                            <NavLink type="button" className="btn btn-outline-light me-2" to="/"> Home </NavLink>
                            {<img src={bird} width="40" height={32} className='img-fluid' alt='bird' />}
                            <div className="text-end">
                                <NavLink type='button' className="btn btn-outline-light me-2" to="/addPeep"> Post </NavLink>
                                <NavLink type='button' className="btn btn-outline-light me-2" to="/" onClick={() => setUser({})}> Logout </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>

            </>
        )
    } else {
        return (
            <>

                <div className="container mb-5">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid mb-2 mb-lg-0">
                            <NavLink type="button" className="btn btn-outline-light me-2" to="/"> Home </NavLink>
                            {<img src={bird} width="40" height={32} className='img-fluid' alt='bird' />}
                            <div className="text-end">
                                <NavLink type="button" className="btn btn-warning" to="/register"> Register </NavLink>
                                <NavLink type="button" className="btn btn-outline-light me-2" to="/login"> Login</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>

            </>
        )
    };
}
export default Header;
