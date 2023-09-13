import React from "react";

type ServiceCartProps = {
	service: string;
	zone?: string;
	text?: string;
};

const ServiceCart = (props: ServiceCartProps) => {
	const { service, zone = "", text = "" } = props;

	return (
		<div className="w-full border border-neutral-500 bg-neutral-300 my-3 rounded p-2">
			<div className="flex justify-between  mb-4">
				<p>{service}</p>
				<span>{zone}</span>
			</div>
			<p>{text}</p>
		</div>
	);
};

export default ServiceCart;
