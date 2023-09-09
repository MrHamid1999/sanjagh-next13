import ServiceCart from "@/components/ServiceCart";
import getServicesApi from "@/lib/getServicesApi";
import getZonesApi from "@/lib/getZonesApi";
import Link from "next/link";
import React from "react";

const Page = async ({ params: { zoneId } }) => {
	const data = await getServicesApi(zoneId);

	return (
		<main>
			{data?.map((service) => {
				return (
					<Link
						href={`/${zoneId}/${service.id}`}
						key={service.id}>
						<ServiceCart service={service.name} />
					</Link>
				);
			})}
		</main>
	);
};

export const generateStaticParams = async () => {
	const data = await getZonesApi();

	return data.map((item) => {
		return {
			zoneId: item.id,
		};
	});
};

export default Page;
