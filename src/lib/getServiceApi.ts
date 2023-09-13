const getServiceApi = async (zoneId: string, serviceId: string) => {
	const url = `https://front-interview.darkube.app/inter/exp/direct/api/page?zoneId=${zoneId}&serviceId=${serviceId}`;

	const data: Promise<SingleService> = fetch(url, {
		next: { revalidate: 18000 },
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return data;
};

export default getServiceApi;
