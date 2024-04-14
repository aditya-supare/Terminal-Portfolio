import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface ProgressBarProps {
    Icon: IconType;
    percentageValue: string;
    barWidth: string;
    text: string;
}

export default function ProgressBar({
    Icon,
    percentageValue,
    barWidth,
    text,
}: ProgressBarProps) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Set animate to true after the component mounts
        setAnimate(true);
    }, []);

    return (
        <div className="w-11/12 mx-auto mt-5 mb-5">
            <div className="flex justify-between mb-3 items-center">
                <div className="flex gap-1 items-center">
                    <Icon className="text-4xl" />
                    <h1>{text}</h1>
                </div>
                <h1>{percentageValue}</h1>
            </div>
            <div className={`w-full bg-gray-800 rounded-md h-2.5 mb-3`}>
                {/* Use inline style to dynamically set the width */}
                <div
                    className={`h-full bg-green-500 rounded-md ${animate ? "transition-width duration-700" : ""}`}
                    style={{ width: animate ? percentageValue : "0%" }}
                />
            </div>
        </div>
    );
}
