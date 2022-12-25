import dayjs from 'dayjs';
import { useState } from 'react';

const useTimer = (initialTime?: number) => {
	const [count, setCount] = useState(initialTime);
	const [isEditing, setIsEditing] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const toggleEdit = () => {
		setIsEditing((prev) => !prev);
	};

	const toggleActive = () => {
		setIsActive((prev) => !prev);
	};

	const setTime = () => {};

	const minutes = 15;
	const seconds = 0;

	return {
		minutes,
		seconds,
		isActive,
		toggleActive,
		isEditing,
		toggleEdit,
		setTime,
	};
};

export default useTimer;
