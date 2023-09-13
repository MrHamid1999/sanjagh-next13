import Search from "@/components/Search";
import getZonesApi from "@/lib/getZonesApi";

const Home = async () => {
	const data: Zones = await getZonesApi();

	return (
		<div className="w-full h-screen flex justify-center">
			<Search zoneList={data} />
		</div>
	);
};

export default Home;
