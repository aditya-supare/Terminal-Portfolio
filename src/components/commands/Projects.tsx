import React from "react";

export default function Projects() {
	const Projects = [
		{
			text: "GrantX ",
            value: "Github Link",
			href: "https://github.com/aditya-supare/grantx-dev",
		},
		{
			text: "Vero-db",
            value: "Github Link",
			href: "https://github.com/aditya-supare/verodb-dev",
		},
        {
			text: "Cosmic-Calm",
            value: "Github Link",
			href: "https://github.com/aditya-supare/Cosmic-Calm",
		},
		{
			text: "CineSync",
            value: "Github Link",
			href: "https://github.com/aditya-supare/CineSync",
		},
		{
			text: "Ed-gpt",
            value: "Github Link",
			href: "https://github.com/aditya-supare/Ed-GPT",
		}
		
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