import React from "react";

const ProtectedRoute = ({ element }) => {
	const isAuthenticated = localStorage.getItem("authToken") ? true : false;

	console.log("isAuthenticated: ", isAuthenticated);
	return (
		<div>{isAuthenticated ? <div>{element}</div> : <p>Please Log In</p>}</div>
	);
};

export default ProtectedRoute;
