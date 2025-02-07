import { useEffect, useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import { Navigation } from 'lucide-react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideo, setloadedVideo] = useState(1);

  const nextVdRef = useRef(null);

  useEffect(() => {
    if (loadedVideo === totalVideos) {
      setisLoading(false);
    }
  }, [loadedVideo]);

  const totalVideos = 4;

  const handleMiniVidClick = () => {
    sethasClicked(true);
    setcurrentIndex((prev) => (prev % totalVideos) + 1);
  }

  const getVideosrc = (index) => {
    return `/videos/hero-${index > totalVideos ? 1 : index}.mp4`;
  }

  const handleLoadedVideo = () => {
    setloadedVideo((prev) => prev + 1);
  }

  useGSAP(() => {
    if (hasClicked) {
      gsap.fromTo("#next-video",{ visibility: "visible", border: "2px solid black" },{ width: "100%", height: "100%",border: "0px solid transparent" , transformOrigin: "center", duration: 1, ease: "power1.inOut", onStart: () => nextVdRef.current.play() });
      gsap.from('#current-video', { transformOrigin: "center", scale: 0, duration: 1.5, ease: "power1.inOut" });
    }

    gsap.fromTo(
      ".animated-hero-title",
      {
        opacity: 0,
        transform: "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
        transformOrigin: "50% 50% -150px",
        willChange: "opacity, transform",
      },
      {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power1.inOut",
        stagger: { each: 0.02, from: "random" }
      },
    );
  }, {
    dependencies: [currentIndex],
    revertOnUpdate: true,
  })

  useGSAP(() => {
    gsap.fromTo("#video-frame",
      // Start state
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full rectangle
      },
      // End state
      {
        clipPath: "polygon(50% 0, 50% 0, 86% 84%, 8% 68%)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "10 top",
          end: "bottom 100",
          scrub: true,
        },
      }
    );

  });



  const getTitle = (index) => {
    switch (index) {
      case 1:
        return `G<b>A</b>MING `;
      case 2:
        return `IDE<b>N</b>TITY`;
      case 3:
        return `RE<b>A</b>LITY`;
      case 4:
        return `AG<b>E</b>NTIC AI `;
      default:
        return `G<b>A</b>MING `;
    }
  };


  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div id="video-frame" className=" relative transition-all  z-10 origin-center bg-blue-75 h-screen w-screen overflow-hidden">
        <div>
          {/* mini video placement */}
          <div className="mask-clip-path overflow-hidden absolute-center absolute z-50 size-64 max-md:size-60 cursor-pointer rounded-lg">
            <div onClick={handleMiniVidClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video
                src={getVideosrc(currentIndex + 1)}
                loop
                muted
                ref={nextVdRef}
                id="current-video"
                className="scale-150 size-64 object-cover object-center"
                onLoadedData={handleLoadedVideo}>
              </video>
            </div>
          </div>

          {/* background video */}
          <video
            src={getVideosrc(currentIndex)}
            ref={nextVdRef}
            loop
            muted
            id="next-video"
            className="absolute-center absolute invisible size-64 z-20 object-cover object-center"
            onLoadedData={handleLoadedVideo}>
          </video>

          <video
            src={getVideosrc(currentIndex)}
            loop
            muted
            autoPlay
            className="absolute top-0 left-0 origin-center size-full object-cover object-center"
            onLoadedData={handleLoadedVideo}>
          </video>
        </div>

        <div className="flex gap-4 " style={{ position: "absolute", bottom: '20px', right: "40px" }}>
          {

            getTitle(currentIndex).split(' ').map((word, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: word }} className="special-font animated-hero-title hero-heading z-40 text-blue-75" />
            ))
          }
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<Navigation className='text-black' />}
              classes="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4" style={{ position: "absolute", bottom: '20px', right: "40px" }}>
        {

          getTitle(currentIndex).split(' ').map((word, index) => (
            <span key={index} dangerouslySetInnerHTML={{ __html: word }} className="special-font animated-hero-title hero-heading  text-black" />
          ))
        }
      </div>
    </div>
  );
}

export default Hero;