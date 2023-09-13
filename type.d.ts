type Zone = {
	id: string;
	name: string;
};

type Service = {
	id: string;
	name: string;
};

type Zones = Array<Service>;
type Services = Array<Service>;

type SingleService = {
	zoneId: string;
	serviceId: string;
	text: string;
};
