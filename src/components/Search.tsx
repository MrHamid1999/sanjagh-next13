"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Start from "./Start";

type SearchProps = {
	zoneList: Zones;
};

const Search = (props: SearchProps) => {
	const { zoneList } = props;
	const [currentZone, setCurrentZone] = useState({
		id: "",
		name: "",
	});
	const [selectedLevel, setSelectedLevel] = useState("start");

	const Zone = dynamic(() => import("@/components/Zone"));
	const Service = dynamic(() => import("@/components/Service"));

	const SelectedComponent = () => {
		switch (selectedLevel) {
			case "start":
				return <Start setSelectedLevel={setSelectedLevel} />;
			case "zone":
				return (
					<Zone
						zoneList={zoneList}
						setCurrentZone={setCurrentZone}
						setSelectedLevel={setSelectedLevel}
					/>
				);

			case "service":
				return (
					<Service
						currentZone={currentZone}
						setSelectedLevel={setSelectedLevel}
					/>
				);
			default:
				return <Start setSelectedLevel={setSelectedLevel} />;
		}
	};

	return (
		<div className="max-w-[500px] w-full h-full p-3 flex flex-wrap content-center flex-col ">
			<SelectedComponent />
		</div>
	);
};

export default Search;
