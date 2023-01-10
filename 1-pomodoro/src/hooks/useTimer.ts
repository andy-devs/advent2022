import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const useTimer = (initialMinutes?: number, initialSeconds?: number) => {
	const getInitialState = () => {
		if (initialMinutes && initialSeconds) {
			return initialMinutes * 60 + initialSeconds;
		} else if (initialMinutes && !initialSeconds) {
			return initialMinutes * 60;
		} else if (!initialMinutes && initialSeconds) {
			return initialSeconds;
		} else return 15 * 60;
	};

	const [count, setCount] = useState(() => getInitialState());
	const [isEditing, setIsEditing] = useState(false);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;

		if (isActive) {
			interval = setInterval(() => {
				setCount((prev) => prev - 1);
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isActive]);

	const toggleEdit = () => {
		setIsEditing((prev) => !prev);
	};

	const toggleActive = () => {
		setIsActive((prev) => !prev);
	};

	const setTime = (minutes: number, seconds: number) => {};

	const minutes = Math.floor(count / 60);
	const seconds = count - minutes * 60;

	const parsedMinutes = minutes < 10 ? '0' + minutes : minutes;
	const parsedSeconds = seconds < 10 ? '0' + seconds : seconds;

	return {
		minutes: parsedMinutes.toString(),
		seconds: parsedSeconds.toString(),
		isActive,
		toggleActive,
		isEditing,
		toggleEdit,
		setTime,
	};
};

export default useTimer;
