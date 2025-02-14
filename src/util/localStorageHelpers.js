export const setUserData = (key, value) => {
	console.log("setting user data");
	// Retrieve existing userData
	let userData = localStorage.getItem("userData");

	// If userData exists, parse it, otherwise work with an empty object
	userData = userData ? JSON.parse(userData) : {};

	// Update the specific key in the userData object
	userData[key] = value;

	// Store the updated userData back to localStorage
	localStorage.setItem("userData", JSON.stringify(userData));

	const expirationTimestamp = new Date().getTime() + 60 * 60 * 1000;
	localStorage.setItem("userDataExpiration", expirationTimestamp.toString());
};

export const getUserData = () => {
	const userDataString = localStorage.getItem("userData");
	const expirationTimestampString = localStorage.getItem("userDataExpiration");

	if (!userDataString || !expirationTimestampString) {
		return null;
	}

	const expirationTimestamp = parseInt(expirationTimestampString, 10);
	const currentTime = new Date().getTime();

	if (currentTime > expirationTimestamp) {
		// The data has expired, remove it from localStorage
		localStorage.removeItem("userData");
		localStorage.removeItem("userDataExpiration");

		// Prompt the user to log in again
		console.log("User data expired. Please log in again.");

		return null;
	}

	// The data is still valid, return it as a JSON object
	return JSON.parse(userDataString);
};

export const clearUserData = () => {
	// Retrieve existing userData
	localStorage.removeItem("userData");
	localStorage.removeItem("userDataExpiration");
	localStorage.removeItem("authToken");
};
