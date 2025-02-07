import { useState, useRef } from "react";
import Tilt from "react-parallax-tilt";

const BentoCard = ({ src, title, description, isComingSoon, isPlayed }) => {
    const vidRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);


    const handleMouseEnter = () => {
        if (!isPlayed) {
            setIsPlaying(true);
            vidRef.current?.play();
        }
    };

    const handleMouseLeave = () => {
        if (!isPlayed) {
            setIsPlaying(false);
            vidRef.current?.pause();
        }
    };

    return (
        <Tilt
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            perspective={1000}
            scale={0.95}
            transitionSpeed={500}
            style={{ width: "100%", height: "100%" }}
        >
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`w-full h-full relative border-hsla rounded-md overflow-hidden`}
            >
                <video
                    ref={vidRef}
                    src={src}
                    loop
                    muted
                    autoPlay={isPlayed ? true : false}
                    className="absolute top-0 left-0 size-full object-cover object-center"
                />
                <div className="relative p-5 flex flex-col z-10 text-blue-50">
                    <div>
                        <h1 className="bento-title special-font">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-xs max-w-64">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default BentoCard;
