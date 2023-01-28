import useTimer from 'hooks/useTimer';
import { ReactComponent as Gear } from 'assets/images/gear.svg';
import { ReactComponent as Check } from 'assets/images/check.svg';
import TimeInput from 'components/TimeInput/TimeInput';
import useTimerInput from 'hooks/useTimerInput';

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

	const { value: newMinutes, handleValueChange: handleNewMinutesChange } =
		useTimerInput(minutes);

	const { value: newSeconds, handleValueChange: handleNewSecondsChange } =
		useTimerInput(seconds);

	const handleEditStart = () => {
		handleNewMinutesChange(minutes);
		handleNewSecondsChange(seconds);

		toggleEdit();
	};

	const handleEditEnd = () => {
		setTime(+newMinutes, +newSeconds);
		toggleEdit();
	};

	return (
		<div className='relative bg-black rounded-[50%] w-full max-w-[518px] min-h-full max-h-[518px] aspect-[1/1] flex items-center justify-center p-2 shadow-[5px_-16px_50px_rgba(255,255,255,0.15)]'>
			<svg
				width='100%'
				height='100%'
				className='absolute top-0 bottom-0 left-0 right-0'>
				<circle
					className='text-blue-600 w-full h-full'
					strokeWidth='5'
					strokeDasharray='circumference'
					strokeDashoffset='circumference - percent / 100 * circumference'
					stroke-linecap='round'
					stroke='currentColor'
					fill='transparent'
					r='50'
					cx='50'
					cy='50'
					width='100%'
					height='100%'
					stroke-dasharray='188.49555921538757'
					stroke-dashoffset='188.49555921538757'></circle>
			</svg>
			<div className='relative w-full h-full bg-background rounded-[50%] flex flex-col items-center justify-center shadow-[inset_0px_0px_114px_rgba(0,0,0,0.45)]'>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-timer text-white text-[130px] xs:text-[196px] leading-none text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
					{isEditing ? (
						<form className='flex items-center content-center'>
							<TimeInput
								value={newMinutes}
								onChange={(e) => handleNewMinutesChange(e.target.value)}
							/>
							<span>:</span>
							<TimeInput
								value={newSeconds}
								onChange={(e) => handleNewSecondsChange(e.target.value)}
							/>
						</form>
					) : (
						<span className='flex items-center content-center'>
							<span className='w-[2ch]'>{minutes}</span>:
							<span className='w-[2ch]'>{seconds}</span>
						</span>
					)}
				</div>
				<div className='flex flex-col items-center absolute bottom-[5%] gap-2 xs:bottom-[10%] xs:gap-4'>
					{!isEditing && (
						<button
							onClick={toggleActive}
							className='font-button text-white tracking-[0.6em] py-2 pl-4 pr-2 text-center'>
							{isActive ? 'STOP' : 'START'}
						</button>
					)}
					<span
						onClick={isEditing ? handleEditEnd : handleEditStart}
						className='cursor-pointer'>
						{isEditing ? <Check /> : <Gear />}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Timer;
