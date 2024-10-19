// /utils/string-helpers.js
export function capitalizeFirstLetter(string) {
	const trimmedString = string.trim();
	return trimmedString.replace(/\w\S*/g, (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});
}

export function displayName(fullName) {
	const names = fullName.split(' ');
	if (names.length === 1) return names[0];
	const firstName = names[0];
	const lastInitial = names[names.length - 1][0];
	return `${firstName} ${lastInitial}.`;
}
