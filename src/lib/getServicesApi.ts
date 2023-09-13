const getServicesApi = async (zoneId: string) => {
	const url = `https://front-interview.darkube.app//inter/exp/direct/api/services?zoneId=${zoneId}`;
	const nextValeus = {
		revalidate: 18000,
		cache: "no-store",
	};
	const data: Promise<Services> = await fetch(url, { next: nextValeus })
		.then((res) => res.json())
		.catch((err) => console.log(url));

	return data;
};

export default getServicesApi;
