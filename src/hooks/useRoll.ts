import { useState } from "react";

export const useRoll = (lockedDice: number[]) => {
	const [currentRoll, setCurrentRoll] = useState<number[]>([1, 2, 3, 4, 5]);

	const roll = () => {
		setCurrentRoll((previousRoll) =>
			previousRoll.map((die, index) => {
				const isLocked = lockedDice.includes(index + 1);

				if (isLocked) {
					return die;
				}

				return Math.floor(Math.random() * 6) + 1;
			}),
		);
	};

	return {
		currentRoll,
		roll,
	};
};
