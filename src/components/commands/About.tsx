import React, { useEffect, useState } from "react";
import { SiNextdotjs, SiReact, SiVercel } from "react-icons/si";

export default function About() {
	const techs = [
		{ Icon: SiReact, color: "text--500", duration: "duration-500" },
		{ Icon: SiNextdotjs, color: "text--300", duration: "duration-700" },
		{ Icon: SiVercel, color: "text--400", duration: "duration-1000" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5">Why?</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
				Terminal's Portfolio is a portfolio style that design to let you go
				through the portfolio in the terminal way.
			</p>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Tech stack
			</h1>
			<p className="text-lg animate-reveal-0.7">
				This site is made with Next.js and deployed on Vercel.
			</p>
			<div className="flex gap-5 text-4xl">
				{techs.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
