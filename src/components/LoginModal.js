//not used, but included for easy additon
//would need to replace the axios calls here to calls to your own server

import React, { useState } from "react";
import "./LoginModal.css";

import { getUserData } from "../util/localStorageHelpers";

import axios from "axios";

const LoginModal = ({ onClose }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleBackgroundClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3000/auth/login", {
				email: email,
				password: password,
			});

			const token = response.data.token;
			localStorage.setItem("authToken", token);

			localStorage.setItem(
				"userData",
				JSON.stringify({
					email: email,
				})
			);

			const expirationTimestamp = new Date().getTime() + 60 * 60 * 1000;
			localStorage.setItem(
				"userDataExpiration",
				expirationTimestamp.toString()
			);

			// Close the modal and clear the input fields
			onClose();
			setEmail("");
			setPassword("");
			window.location.reload();
		} catch (error) {
			console.error("Error logging in:", error.response.data.message);
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:3000/auth/signup", {
				email: email,
				password: password,
			});

			if (response.status === 200) {
				console.log("User signed up successfully");
				onClose();
				setEmail("");
				setPassword("");
				// Handle successful sign up (e.g., close the modal, show a message, etc.)
			} else {
				console.log("Error signing up");
				// Handle errors during sign up
			}
		} catch (error) {
			console.log("Error signing up:", error);
			// Handle errors during sign up
		}
	};

	return (
		<div className="modal-background" onClick={handleBackgroundClick}>
			<div className="modal" onClick={stopPropagation}>
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				<h2>Log in to your account</h2>
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
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<div className="button-container">
						<button type="submit" onClick={handleLogin}>
							Login
						</button>
						<button type="submit" onClick={handleSignUp}>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginModal;
