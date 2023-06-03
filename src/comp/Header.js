import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoutIcon from "../icons/logout (1).png"

const Header = () => {
  const handleLogout = () => {
    // Handle logout functionality
  };

  return (
    <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3">
      <h1 className="text-center m-0">Localisation des restaurants</h1>
      <div className="d-flex">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a  className="nav-link " aria-current="page" href="/"><img src={logoutIcon} width="20" height="20" style={{ marginRight: '10px' }}></img>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        
    </header>
  );
};

export default Header;
