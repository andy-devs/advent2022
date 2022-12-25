import React from 'react';

function Gear() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='32'
			height='32'
			fill='none'
			viewBox='0 0 32 32'>
			<g filter='url(#filter0_d_108_7)'>
				<path
					fill='#fff'
					d='M28 14v-4h-4.286a7.894 7.894 0 00-.848-2.038l3.032-3.032L23.07 2.1l-3.03 3.032A7.966 7.966 0 0018 4.284V0h-4v4.284a7.971 7.971 0 00-2.04.85L8.93 2.1 6.102 4.928l3.03 3.032A7.902 7.902 0 008.286 10H4v4h4.286c.188.726.476 1.408.848 2.038l-3.032 3.034L8.93 21.9l3.032-3.032c.632.372 1.312.66 2.04.85V24h4v-4.284a8.043 8.043 0 002.04-.85l3.032 3.032 2.828-2.828-3.032-3.034c.372-.63.66-1.31.848-2.038H28V14zm-12 2c-2.208 0-4-1.794-4-4 0-2.204 1.792-4 4-4s4 1.796 4 4c0 2.204-1.792 4-4 4z'></path>
			</g>
			<defs>
				<filter
					id='filter0_d_108_7'
					width='32'
					height='32'
					x='0'
					y='0'
					colorInterpolationFilters='sRGB'
					filterUnits='userSpaceOnUse'>
					<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
					<feColorMatrix
						in='SourceAlpha'
						result='hardAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'></feColorMatrix>
					<feOffset dy='4'></feOffset>
					<feGaussianBlur stdDeviation='2'></feGaussianBlur>
					<feComposite in2='hardAlpha' operator='out'></feComposite>
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
					<feBlend
						in2='BackgroundImageFix'
						result='effect1_dropShadow_108_7'></feBlend>
					<feBlend
						in='SourceGraphic'
						in2='effect1_dropShadow_108_7'
						result='shape'></feBlend>
				</filter>
			</defs>
		</svg>
	);
}

export default Gear;
