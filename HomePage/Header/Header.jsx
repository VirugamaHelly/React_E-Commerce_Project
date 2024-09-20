// import React, { useContext } from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import { lcontext } from '../Login/LContext';

// export default function Header() {
//     const { Lstate, floggedout } = useContext(lcontext);



//     return (
//         <header className="header">
//             <nav className="navbar navbar-expand-lg">
//                 <div className="container-fluid">

//                     <a className="logo" href="#">
//                         <img src="https://www.poojaratele.com/media/logo/stores/1/PTLOGO210621.png" alt="Logo" />
//                     </a>
                   
//                         <div className="icon">
//                             <i className="fa-solid fa-magnifying-glass m-2"></i>
//                             <i className="fa-solid fa-bag-shopping m-2"></i>
//                             <i className="fa-regular fa-user m-2"></i>
//                         </div>
//                         <div className="login">
//                         <Link to='/Login'>
//                                 {Lstate.user === "helly" ?
//                                     <button style={{ borderRadius: "5px", display: "none" }}>Login</button>
//                                     :
//                                     <button style={{ borderRadius: "5px", display: "block" }}>Login</button>
//                                 }
//                             </Link>
//                             <span>{Lstate.user}</span>
//                             {Lstate.islogged ?
//                                 "login"
//                                 :
//                                 <button onClick={() => floggedout()}>Logout</button>
//                             }
//                         </div>

                     
//                     </div>
//             </nav>
//         </header>
//     );
// }
import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { lcontext } from '../Login/LContext';

export default function Header() {
    const { Lstate, floggedout } = useContext(lcontext);

    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <a className="logo" href="#">
                        <img src="https://www.poojaratele.com/media/logo/stores/1/PTLOGO210621.png" alt="Logo" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                        <span className="navbar-toggler-icon">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="nav">
                        <div className="icon">
                            <i className="fa-solid fa-magnifying-glass m-2"></i>
                            <i className="fa-solid fa-bag-shopping m-2"></i>
                            <i className="fa-regular fa-user m-2"></i>
                            <Link to='/Login'>
                                {Lstate.user === "helly" ?
                                    <button className="btn_login" style={{ display: "none" }}>Login</button>
                                    :
                                    <button className="btn_login">Login</button>
                                }
                            </Link>
                            <span>{Lstate.user}</span>
                            {Lstate.islogged ?
                                "Logged in"
                                :
                                <button className="btn btn-danger" onClick={() => floggedout()}>Logout</button>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}



    