import React from "react";

const Item = (props) => {
  const { name, id, handleClick } = props
  return (
    <div
      className="w-full px-2 py-4 bg-slate-50 my-1 cursor-pointer"
      onClick={() => handleClick(id)}
    >
      {name}
    </div>
  );
};

export default Item;
