import React from "react";

type ItemProps = {
	name: string;
	id: string;
	handleClick: (id: string) => void;
};

const Item = (props: ItemProps) => {
	const { name, id, handleClick } = props;
	return (
		<div
			className="w-full px-2 py-4 bg-slate-50 my-1 cursor-pointer"
			onClick={() => handleClick(id)}>
			{name}
		</div>
	);
};

export default Item;
