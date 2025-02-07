import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        // Floating animation for stones
        gsap.to(".floating-stones", {
            y: "20px", // Moves up and down
            rotationZ: "1deg", // Slight rotation for a natural effect
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Pin the about subtext separately
        ScrollTrigger.create({
            trigger: ".about-subtext",
            start: "-175 center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: false, // Keeps layout stable
        });

        // Pin the clip (image) separately
        ScrollTrigger.create({
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true, // Ensures smooth scrolling
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
            },
        });

        tl.fromTo(
            ".mask-clip-path",
            {
                transform: "translateX(-50%) translateY(8%) rotateY(30deg) rotateX(10deg)",
            },
            {
                width: "100%",
                height: "100%",
                borderRadius: 0,
                ease: "power1.inOut",
                transform: "translateX(-50%) rotateY(0deg)",
            }
        );
    });

    return (
        <section className="pt-3 w-full" id="about">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-lg uppercase md:text-[20px]">
                    Welcome to Zentry
                </p>

                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    classes="mt-5 !text-black text-center"
                />

                <div className="about-subtext">
                    <p>The Game of Games begins—your life, now an epic MMORPG</p>
                    <p className="text-gray-500">
                        Zentry unites every player from countless games and platforms, both
                        digital and physical, into a unified Play Economy
                    </p>
                </div>
            </div>

            <div
                style={{ perspective: "1000px", boxSizing: "border-box" }}
                className="relative h-dvh w-screen overflow-hidden"
                id="clip"
            >
                
                {/* Floating Stones */}
                <div className="absolute top-0 left-1/2 w-[1200px] -translate-x-1/2 z-30 floating-stones">
                    <img src="img/stones.webp" alt="Floating Stones" />
                </div>

                {/* Background Image */}
                <div style={{ boxSizing: "border-box" }} className="mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
