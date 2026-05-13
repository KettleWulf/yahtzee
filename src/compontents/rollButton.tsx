import React from "react";

type rollButtonProps = {
	id: number;
	selected?: boolean;
};

const RollButton: React.FC<rollButtonProps> = ({ selected }) => {
	return (
		<button className={`${selected ? "bg-red-500/20" : "bg-white/0"} rounded-lg p-3`}>Roll</button>
	);
};

export default RollButton;
