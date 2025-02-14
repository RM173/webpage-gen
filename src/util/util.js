export const capitalizeFirstLetterOfWords = (str) => {
	if (!str) return ""; // Return an empty string if input is falsy

	const words = str.split(" "); // Split the string into an array of words
	const capitalizedWords = words.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1)
	); // Capitalize the first letter of each word
	const capitalizedString = capitalizedWords.join(" "); // Join the words back into a string

	return capitalizedString;
};
