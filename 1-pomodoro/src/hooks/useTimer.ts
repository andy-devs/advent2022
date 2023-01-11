import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const useTimer = (initialMinutes?: number, initialSeconds?: number) => {
	const getMiliseconds = (minutes: number, seconds: number) => {
		if (minutes && seconds) {
			return minutes * 60 + seconds;
		} else if (minutes && !seconds) {
			return minutes * 60;
		} else return seconds;
	};

	const [count, setCount] = useState(() =>
		getMiliseconds(initialMinutes || 15, initialSeconds || 0)
	);
	const [isEditing, setIsEditing] = useState(false);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;

		if (isActive) {
			interval = setInterval(() => {
				setCount((prev) => {
					if (prev !== 0) {
						return prev - 1;
					}
					setIsActive(false);
					clearInterval(interval);
					return 0;
				});
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

	const setTime = (minutes: number, seconds: number) => {
		setCount(() => getMiliseconds(minutes, seconds));
	};

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
