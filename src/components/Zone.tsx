import React from "react";
import Header from "./Header";
import SearchWrapper from "./SearchWrapper";

type ZoneProps = {
	zoneList: Zones | [];
	setCurrentZone: React.Dispatch<React.SetStateAction<Zone>>;
	setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
};

const Zone = (props: ZoneProps) => {
	const { zoneList, setCurrentZone, setSelectedLevel } = props;

	const handleClick = (id: string) => {
		const selectedZone: Zone | undefined = zoneList.find(
			(item) => item.id === id
		);

		if (selectedZone) {
			setCurrentZone(selectedZone);
			setSelectedLevel("service");
		}
	};
	return (
		<div className="w-full h-full">
			<Header
				text={"شهر خود را اانتخاب کنید "}
				handleBack={() => setSelectedLevel("start")}
			/>
			<SearchWrapper
				list={zoneList}
				handleClick={handleClick}
				placeHolder="جستجوی شهر"
			/>
		</div>
	);
};

export default Zone;
