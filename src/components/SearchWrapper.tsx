"use client";
import React, { useMemo, useState } from "react";
import Item from "./Item";
import SearchInput from "./SearchInput";
import ItemNotFound from "./ItemNotFound";
type SearchWrapperProps = {
	list: Zones | Services | [];
	handleClick: (id: string) => void;
	placeHolder: string;
};
const SearchWrapper = (props: SearchWrapperProps) => {
	const { list, handleClick, placeHolder } = props;
	const [inputValue, setInputValue] = useState("");

	const filteredList = useMemo(() => {
		let trimmedValue = inputValue.trim();

		if (trimmedValue === "") {
			return list;
		} else {
			return list.filter((item) => item.name.includes(trimmedValue));
		}
	}, [list, inputValue]);

	return (
		<div className="w-full h-full">
			<SearchInput
				inputValue={inputValue}
				setInputValue={setInputValue}
				placeHolder={placeHolder}
			/>
			<div className="h-full">
				{filteredList.length > 0 ? (
					filteredList.map((item) => {
						return (
							<Item
								key={item.id}
								name={item.name}
								id={item.id}
								handleClick={handleClick}
							/>
						);
					})
				) : (
					<ItemNotFound />
				)}
			</div>
		</div>
	);
};

export default SearchWrapper;
