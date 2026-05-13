import React from "react";

type DiceWrapperProps = {
	id: number;
	selected?: boolean;
	children: React.ReactNode;
	onClick: () => void;
};

const DiceWrapper: React.FC<DiceWrapperProps> = ({ selected, children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${selected ? "bg-red-500/20" : "bg-white/0"} rounded-lg p-3`}
		>
			{children}
		</button>
	);
};

export default DiceWrapper;
