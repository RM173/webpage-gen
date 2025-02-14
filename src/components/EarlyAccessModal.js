
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./EarlyAccessModal.css";

import db from "../api/firebase";
import config from "../config";

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const EarlyAccessModal = ({ onClose }) => {
	const [email, setEmail] = useState("");

	const location = useLocation();
  const pathName = location.pathname.substring(1).toLowerCase();

	const handleBackgroundClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	const handleSignUp = async (event) => {
		event.preventDefault();
	
		try {
			await addDoc(collection(db, "emails"), {
				email: email,
				website: window.location.href,
				timestamp: serverTimestamp()
			  });
		  console.log('Email successfully registered.');
		  setEmail('');  
		  onClose();  
		} catch (error) {
		  console.error('Error registering email: ', error);
		}
	  };

	return (
		<div className="modal-background" onClick={handleBackgroundClick}>
			<div className="modal" onClick={stopPropagation}>
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				<h2>{config[pathName]?.modalHeader}</h2>
				<p className="p-early-access-modal">{config[pathName]?.modalParagraph}</p>
				<form>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						autoComplete="off"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<div className="button-container">
						<button type="submit" onClick={handleSignUp}>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EarlyAccessModal;
