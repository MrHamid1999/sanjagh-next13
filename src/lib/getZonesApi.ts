const getZonesApi = async () => {
	const url =
		"https://front-interview.darkube.app//inter/exp/direct/api/zones";

	const data: Promise<Zones> = await fetch(url, {
		next: { revalidate: 18000 },
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return data;
};

export default getZonesApi;
