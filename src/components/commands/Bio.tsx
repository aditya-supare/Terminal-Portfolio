import { GoVerified } from "react-icons/go";
import { SiArtstation, SiGithub, SiYoutube } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/aditya-supare",
			text: "@adityasupare",
		},
		{
			title: "Youtube",
			Icon: SiYoutube,
			href: "https://www.youtube.com/@wabi3958/featured",
			text: "@wabi",
		},
		{
			title: "ArtStation",
			Icon: SiArtstation,
			href: "https://www.artstation.com/wabi_001",
			text: "@artstation",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/111862833?s=400&u=91521813a86842ec3150b3218c21c94da8665082&v=4"
					alt="AdityaSupare"
					className="w-40 h-40 rounded-full border-2 border-green-300"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Aditya Supare</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">joined 21 years ago</p>
				</div>
			</div>
			<p>
			Hello! I'm a web developer with a passion for 2D/3D art. I love merging my artistic flair 
			with web development to create immersive online experiences.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
