import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from '../hooks/useAuthContext'

export const Navbar = () => {

    const navigate=useNavigate();

    const { user,dispatch } = useAuthContext();

    function logoutUser(){
        dispatch({type:'LOGOUT'});
        localStorage.removeItem('user');
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm p-2 mb-2" style={{backgroundColor: "#1c1c1b",fontSize: "18px"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'} style={{fontSize: "25px",color:"#fffef7"}}><i>RemindMe</i></Link>
                    <button className="navbar-toggler" style={{backgroundColor:"#fffef7"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:"#fffef7"}} aria-current="page" to={'/'}>Home</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {!user && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="btn btn-warning mx-2" style={{color:"black"}} aria-current="page" to={'/login'}>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="btn btn-warning" style={{color:"black"}} aria-current="page" to={'/signup'}>Signup</Link>
                                        </li>
                                    </>
                                )}

                                {user && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link active me-3" style={{color:"#fffef7"}} aria-current="page">welcome, {user.userName}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <button className="btn btn-warning" onClick={logoutUser}>Logout</button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}