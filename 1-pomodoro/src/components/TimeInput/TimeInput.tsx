interface TimeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange }) => {
	return (
		<input
			className='bg-transparent text-white w-[2ch] focus:outline-none'
			type='number'
			step='1'
			min='0'
			max='99'
			value={value}
			onChange={onChange}
		/>
	);
};

export default TimeInput;
