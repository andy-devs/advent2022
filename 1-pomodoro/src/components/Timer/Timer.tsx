import dayjs from 'dayjs';
import useTimer from '../../hooks/useTimer';
import { useState } from 'react';
import { ReactComponent as Gear } from '../../assets/images/gear.svg';

interface TimerProps {}

const Timer: React.FC<TimerProps> = () => {
	const {
		minutes,
		seconds,
		isActive,
		toggleActive,
		isEditing,
		toggleEdit,
		setTime,
	} = useTimer();

	return (
		<div className='bg-black rounded-[50%] w-full max-w-[518px] min-h-full max-h-[518px] aspect-[1/1] flex items-center justify-center p-2 shadow-[5px_-16px_50px_rgba(255,255,255,0.15)]'>
			<div className='w-full h-full bg-background rounded-[50%] flex flex-col items-center justify-center shadow-[inset_0px_0px_114px_rgba(0,0,0,0.45)]'>
				<span className='font-timer sm:mt-[5%] text-white text-[120px] sm:text-[196px] leading-none text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
					15:00
				</span>
				<button className='font-button text-white tracking-[0.6em] mt-3 sm:mt-6 py-2 pl-4 pr-2 text-center'>
					START
				</button>
				<span className='mt-4 cursor-pointer' onClick={toggleEdit}>
					<Gear />
				</span>
			</div>
		</div>
	);
};

export default Timer;
