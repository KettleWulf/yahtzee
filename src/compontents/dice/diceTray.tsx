import React, { useState } from 'react'
import DiceWrapper from './diceWrapper';
import { useRoll } from '../../hooks/useRoll';
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from "react-icons/bs";



const DiceTray = () => {
		const [lockedDice, setLockedDice] = useState<number[]>([]);
		const { currentRoll, roll } = useRoll(lockedDice);
	
		enum DiceID {
			One = 1,
			Two = 2,
			Three = 3,
			Four = 4,
			Five = 5,
		}
	
		type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
	
		const diceIcons: Record<DiceValue, React.ReactNode> = {
			1: <BsDice1 />,
			2: <BsDice2 />,
			3: <BsDice3 />,
			4: <BsDice4 />,
			5: <BsDice5 />,
			6: <BsDice6 />,
		};
	
		const toggleSelectedDice = (id: number) => {
			setLockedDice((currentDice) => {
				if (currentDice.includes(id)) {
					return currentDice.filter((diceId) => diceId !== id);
				}
	
				return [...currentDice, id];
			});
		};
  return (
	<div className="flex flex-col items-center text-6xl">
				<DiceWrapper
					id={DiceID.One}
					selected={lockedDice.includes(DiceID.One)}
					onClick={() => toggleSelectedDice(DiceID.One)}
				>
					{diceIcons[currentRoll[0]]}
				</DiceWrapper>
				<DiceWrapper
					id={DiceID.Two}
					selected={lockedDice.includes(DiceID.Two)}
					onClick={() => toggleSelectedDice(DiceID.Two)}
				>
					{diceIcons[currentRoll[1]]}
				</DiceWrapper>
				<DiceWrapper
					id={DiceID.Three}
					selected={lockedDice.includes(DiceID.Three)}
					onClick={() => toggleSelectedDice(DiceID.Three)}
				>
					{diceIcons[currentRoll[2]]}
				</DiceWrapper>
				<DiceWrapper
					id={DiceID.Four}
					selected={lockedDice.includes(DiceID.Four)}
					onClick={() => toggleSelectedDice(DiceID.Four)}
				>
					{diceIcons[currentRoll[3]]}
				</DiceWrapper>
				<DiceWrapper
					id={DiceID.Five}
					selected={lockedDice.includes(DiceID.Five)}
					onClick={() => toggleSelectedDice(DiceID.Five)}
				>
					{diceIcons[currentRoll[4]]}
				</DiceWrapper>
				<button
					className="w-50 rounded-md bg-green-400/60 p-4 text-4xl"
					onClick={() => {
						roll();
					}}
				>
					Re-Roll
				</button>
			</div>
  )
}

export default DiceTray