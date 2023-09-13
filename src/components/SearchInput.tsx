import React from "react";
import { CgClose } from "react-icons/cg";

type SearchInputProps = {
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
	placeHolder: string;
};

const SearchInput = (props: SearchInputProps) => {
	const { inputValue, setInputValue, placeHolder } = props;

	let handleClearClick = () => {
		setInputValue("");
	};

	return (
		<div className="flex w-full mt-[50px] border border-neutral-300 p-3 rounded ">
			<div className="flex justify-between  items-center w-full relative overflow-hidden">
				<input
					type="search"
					className="absolute outline-none text-gray-700 w-full"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder={placeHolder}
				/>
			</div>
			<span
				className="z-10"
				onClick={handleClearClick}>
				<CgClose
					className="cursor-pointer"
					size="1.4rem"
					color="#D3D4D5"
				/>
			</span>
		</div>
	);
};

export default SearchInput;
