import { ReactComponent as EditLine } from 'assets/images/edit-line.svg';

interface TimeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange }) => {
	return (
		<div className='flex-col relative'>
			<input
				className='bg-transparent text-white w-[2ch] focus:outline-none'
				type='number'
				step='1'
				min='0'
				max='99'
				value={value}
				onChange={onChange}
			/>
			<EditLine className='absolute bottom-0 right-0 left-0 m-auto' />
		</div>
	);
};

export default TimeInput;
