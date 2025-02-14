import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import EarlyAccessModal from "./EarlyAccessModal";
import { getUserData, clearUserData } from "../util/localStorageHelpers";

//import config
import config from "../config";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);

	const location = useLocation();
  const pathName = location.pathname.substring(1).toLowerCase();

  const dataExists = config[pathName];

	const handleModalClose = () => {
		setShowModal(false);
	};

	const handleLogout = () => {
		console.log("logging out");
		clearUserData();
		window.location.reload();
	};

	return (
		<div className="navbar">
			<div className="navbar-logo">{/* Insert your company logo here */}</div>
			<div className="navbar-links">
				<Link to={`/${pathName}`}>Home</Link> 
				{dataExists ? ( 
					getUserData() ? (
					<button className="login-btn" onClick={handleLogout}>
						Logout
					</button>
				) : (
					<button className="login-btn" onClick={() => setShowModal(true)}>
						Try Free Now
					</button>
				)) : null }
				{showModal && <EarlyAccessModal onClose={handleModalClose} />}
				{/*
        <div className="dropdown">
          <span>ParentText</span>
          <div className="dropdown-content">
            <Link to="/">Item1</Link>
            <Link to="/">Item2</Link>
          </div>
        </div>
        */}
			</div>
		</div>
	);
};

export default Navbar;
