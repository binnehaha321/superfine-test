export const getFeaturedJams = async () => {
	try {
		const res = await fetch("../assets/data/dummy.json");
		return res.json();
	} catch (error) {
		console.log(error);
	}
};
