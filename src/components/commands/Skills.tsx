import ProgressBar from "../ProgressBar";
import {
	SiAdobeaftereffects,
	SiBlender,
	SiExpress,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-70%",
			percentageValue: "70%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-65%",
			percentageValue: "65%",
			text: "Tailwindcss",
		},
		{
			Icon: SiExpress,
			barWidth: "w-40%",
			percentageValue: "40%",
			text:"Express"
		},
		{
			Icon: SiTypescript,
			barWidth: "w-50%",
			percentageValue: "50%",
			text: "Typescript",
		},
		
		{
			Icon: SiNextdotjs,
			barWidth: "w-60%",
			percentageValue: "60%",
			text: "Next.js",
		},
		{
			Icon: SiBlender,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Blender",
		},
		{
			Icon: SiAdobeaftereffects,
			barWidth: "w-95%",
			percentageValue: "95%",
			text: "After Effects",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
