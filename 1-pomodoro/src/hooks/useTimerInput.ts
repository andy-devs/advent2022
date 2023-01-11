import { useState } from 'react';

const useTimerInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	const handleValueChange = (newValue: string) => {
		setValue((prev) => {
			if (newValue.length > 2) {
				return newValue.slice(0, 2);
			}
			return newValue;
		});
	};

	return { value, handleValueChange };
};

export default useTimerInput;
