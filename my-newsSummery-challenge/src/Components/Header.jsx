import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <NavLink className="navbar-brand" to="/"><h4>DF News App </h4></NavLink>
                    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarTogglerDemo02">
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <NavLink className='nav-link active' aria-current="page" to="/"><h4>Home</h4></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;

