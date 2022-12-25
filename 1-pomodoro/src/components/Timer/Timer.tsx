import dayjs from 'dayjs';
import useTimer from 'hooks/useTimer';
import { useState } from 'react';
import { ReactComponent as Gear } from 'assets/images/gear.svg';
import { ReactComponent as Check } from 'assets/images/check.svg';
import { useForm } from 'react-hook-form';

interface TimerProps {}

interface TimerInput {
	minutes: number;
	seconds: number;
}

const Timer: React.FC<TimerProps> = () => {
	const {
		minutes,
		seconds,
		isActive,
		toggleActive,
		isEditing,
		toggleEdit,
		setTime,
	} = useTimer(15, 0);

	const { register } = useForm<TimerInput>({
		defaultValues: {
			minutes: Number(minutes),
			seconds: Number(seconds),
		},
	});

	return (
		<div className='bg-black rounded-[50%] w-full max-w-[518px] min-h-full max-h-[518px] aspect-[1/1] flex items-center justify-center p-2 shadow-[5px_-16px_50px_rgba(255,255,255,0.15)]'>
			<div className='w-full h-full bg-background rounded-[50%] flex flex-col items-center justify-center shadow-[inset_0px_0px_114px_rgba(0,0,0,0.45)]'>
				<div className='font-timer text-white text-[120px] sm:text-[196px] leading-none text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
					{isEditing ? (
						<form className='max-w-[304px] flex'>
							<input
								className='bg-transparent grow-1 max-w-[160px] focus:outline-none'
								type='number'
								placeholder='00'
								step='1'
								min='0'
								max='99'
								{...register('minutes', { maxLength: 2 })}
							/>
							<span>:</span>
							<input
								className='bg-transparent grow-1 max-w-[160px] focus:outline-none'
								type='number'
								placeholder='00'
								step='1'
								min='0'
								max='99'
								{...register('seconds', { maxLength: 2 })}
							/>
						</form>
					) : (
						<span className=''>{`${minutes}:${seconds}`}</span>
					)}
				</div>
				{!isEditing && (
					<button
						onClick={toggleActive}
						className='font-button text-white tracking-[0.6em] mt-3 sm:mt-6 py-2 pl-4 pr-2 text-center'>
						{isActive ? 'STOP' : 'START'}
					</button>
				)}
				<span onClick={toggleEdit} className='mt-4 cursor-pointer'>
					{isEditing ? <Check /> : <Gear />}
				</span>
			</div>
		</div>
	);
};

export default Timer;
