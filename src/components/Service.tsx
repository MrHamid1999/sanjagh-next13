"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import getServicesApi from "@/lib/getServicesApi";
import SearchWrapper from "./SearchWrapper";
import { useRouter } from "next/navigation";

type ServiceProps = {
	currentZone: Zone;
	setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
};

const Service = (props: ServiceProps) => {
	const { currentZone, setSelectedLevel } = props;
	const [services, setServices] = useState<Services | []>([]);

	const router = useRouter();

	useEffect(() => {
		const getServices = async () => {
			const data: Services | [] = await getServicesApi(currentZone.id);
			setServices(data);
		};
		getServices();
	}, [currentZone]);

	return (
		<div className="w-full">
			<Header
				text="سرویس خود را انتخاب کنید"
				handleBack={() => setSelectedLevel("zone")}
			/>
			<SearchWrapper
				list={services}
				placeHolder="جستجوی سرویس"
				handleClick={(id) => router.push(`/${currentZone.id}/${id}`)}
			/>
		</div>
	);
};

export default Service;
