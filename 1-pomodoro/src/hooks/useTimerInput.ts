import { useState } from 'react';

const useTimerInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	const handleValueChange = (newValue: string) => {
		setValue(newValue);
	};

	return { value, handleValueChange };
};

export default useTimerInput;
