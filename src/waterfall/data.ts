export const getData = async () => {
	return await fetch('https://dog.ceo/api/breed/hound/images/random/10').then(
		(res) => {
			return res.json();
		}
	);
};
