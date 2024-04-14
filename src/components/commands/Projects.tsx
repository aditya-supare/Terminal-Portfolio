import React from "react";

export default function Projects() {
	const Projects = [
		{
			text: "Calucator(React) ",
            value: "Github Link",
			href: "https://github.com/aditya-supare/MyCalculator-react",
		},
		{
			text: "Tic Tac Toe (React)",
            value: "Github Link",
			href: "https://github.com/aditya-supare/tictactoeREACT",
		},
        {
			text: "Fitness Tracker(MERN)",
            value: "Github Link",
			href: "https://github.com/aditya-supare/Fitness-tracker",
		},
		{
			text: "Terminal Portfolio (Next.js)",
            value: "Github Link",
			href: "https://github.com/aditya-supare/Terminal-Portfolio",
		},
		
	];
	return (
		<div className="w-11/12 mx-auto">
			{Projects.map(({ text, value, href }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-36">{text}</h1>
						<a href={href} className="flex-1 underline text-blue-300 ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}