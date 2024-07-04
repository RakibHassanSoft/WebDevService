import React, { useEffect, useState, useRef } from 'react';

const ProgressCircle = ({ percentage, title }) => {
    const [progress, setProgress] = useState(0);
    const progressRef = useRef();
    const observerRef = useRef();

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgress();
                    } else {
                        resetProgress();
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        observerRef.current.observe(progressRef.current);

        return () => observerRef.current.disconnect();
    }, []);

    const animateProgress = () => {
        const targetProgress = percentage;
        const animationDuration = 2000; // Animation duration in milliseconds
        const increment = targetProgress / (animationDuration / 10); // Divide by 10 for smoother animation

        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress < targetProgress) {
                    return prevProgress + increment;
                } else {
                    clearInterval(interval);
                    return targetProgress;
                }
            });
        }, 10);
    };

    const resetProgress = () => {
        setProgress(0);
    };

    return (
        <div ref={progressRef} className="flex flex-col items-center p-4">
            <div className="relative flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="currentColor"
                        strokeWidth="10%"
                        fill="transparent"
                        className="text-gray-300"
                    />
                    <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="currentColor"
                        strokeWidth="10%"
                        fill="transparent"
                        strokeDasharray="283"
                        strokeDashoffset={`calc(283 - (283 * ${progress}) / 100)`}
                        className="text-green-500"
                    />
                </svg>
                <h1 className="absolute text-green-500 text-3xl font-bold">{Math.round(progress)}%</h1>
            </div>
            <h1 className="mt-4 text-xl text-white">{title ? title : "Demo title"}</h1>
        </div>
    );
};

export default ProgressCircle;
