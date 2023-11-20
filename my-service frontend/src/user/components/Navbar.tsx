// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";

// const Navbar: React.FC = () => {
    
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid" style ={{ backgroundColor:'rgb(237, 219, 46)'}}>
//                     <a className="navbar-brand" href="#"></a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/home">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/login">Login</a>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Dropdown
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a className="dropdown-item" href="#">Action</a></li>
//                                     <li><a className="dropdown-item" href="#">Another action</a></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><a className="dropdown-item" href="#">Something else here</a></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
//                             </li>
//                         </ul>
//                         <form className="d-flex">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//             <div><Outlet/></div>
            
            
//         </>
//     );
// };

// export default Navbar;

//jithin


// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from 'react-router-dom';  // Importing useNavigate from react-router-dom
// import { useAuth } from '../context/AuthContext';  // Replace with the actual import from your auth library

// const Navbar: React.FC = () => {
//     const { user, logout, admin } = useAuth();  // Assuming useAuth provides user, logout, and admin
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate("/");
//     };

//     const handleLogoutAdmin = () => {
//         logout();
//         navigate("/");
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 {/* Your navbar content */}
//                 {/* ... */}
//                 <form className="d-flex">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success" type="submit">Search</button>

//                     {user ? (
//                         <>
//                             <a href="/enrolled_list" className="nav-item nav-link">Enrolled</a>
//                             <a href="" onClick={handleLogout} className="nav-item nav-link">Logout</a>
//                         </>
//                     ) : (
//                         !admin && <a href="/signin" className="nav-item nav-link">Login</a>
//                     )}
//                     {admin ? (
//                         <>
//                             <a href="/dash" className="nav-item nav-link">Dashboard</a>
//                             <a href="/students_enrolled_list" className="nav-item nav-link">Enrolled List</a>
//                             <a href="/create_course" className="nav-item nav-link">New Course</a>
//                             <a href="" onClick={handleLogoutAdmin} className="nav-item nav-link">Logout</a>
//                         </>
//                     ) : (
//                         !user && <a href="/admin_signin" className="nav-item nav-link">Instructor | login</a>
//                     )}

//                 </form>
//             </nav>
//             <div><Outlet /></div>
//         </>
//     );
// };

// export default Navbar;

//jithin end

import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">CarWash</a>
                    <a className="nav-link" href="/Bookhistory">BookingHistory</a>
                    
                    <a className="nav-link ms-5" href="/adminlogin">Admin</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> */}

                            {user ? (
                                <>
                                    {/* <a href="/enrolled_list" className="nav-link">Enrolled</a> */}
                                    <a href="/" onClick={handleLogout} className="nav-link">Logout</a>
                                </>
                            ) : (
                                <a href="/login" className="nav-link btn -">Login</a>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
            <div><Outlet /></div>
        </>
    );
};

export default Navbar;

