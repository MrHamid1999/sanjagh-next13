import ServiceCart from "@/components/ServiceCart";
import getServiceApi from "@/lib/getServiceApi";

type ServicePageProps = {
	params: {
		zoneId: string;
		serviceId: string;
	};
};

const Page = async ({ params: { zoneId, serviceId } }: ServicePageProps) => {
	const data: SingleService = await getServiceApi(zoneId, serviceId);

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
	return [];
};

export default Page;
