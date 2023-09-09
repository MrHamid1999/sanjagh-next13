import ServiceCart from "@/components/ServiceCart";
import getServiceApi from "@/lib/getServiceApi";
import getServicesApi from "@/lib/getServicesApi";
import getZonesApi from "@/lib/getZonesApi";
import React from "react";

const Page = async ({ params: { zoneId, serviceId } }) => {
	const data = await getServiceApi(zoneId, serviceId);

	return (
		<div className="w-full h-full flex justify-center pt-3 px-2 ">
			{data?.serviceId ? (
				<ServiceCart
					service={data?.serviceId}
					zone={data?.zoneId}
					text={data?.text}
				/>
			) : (
				<p>خدمت مورد نظر در حال حاظر در دسترس نمیباشد</p>
			)}
		</div>
	);
};

export const generateStaticParams = async () => {
	const zoneData = await getZonesApi();
	const servicesData = [];

	zoneData.forEach((zone) => {
		getServicesApi(zone.id).then((res) => {
			const data = res.map((item) => {
				return {
					...item,
					zoneId: zone.id,
				};
			});
			servicesData.push(data);
		});
	});

	const data = servicesData.flat();

	return data.map((item) => {
		return {
			zoneId: item.zoneId,
			serviceId: item.serviceId,
		};
	});
};

export default Page;
