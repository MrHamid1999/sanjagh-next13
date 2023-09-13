import ServiceCart from "@/components/ServiceCart";
import getServicesApi from "@/lib/getServicesApi";
import Link from "next/link";

type ZonePageProps = {
	params: {
		zoneId: string;
	};
};

const Page = async ({ params: { zoneId } }: ZonePageProps) => {
	const data: Services = await getServicesApi(zoneId);

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
	return [];
};

export default Page;
