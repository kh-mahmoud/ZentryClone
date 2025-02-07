import { useState } from "react";
import BentoCard from "./BentoCard";
import Tilt from "react-parallax-tilt";

const Features = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Handler for enabling/disabling the grabbing effect
  const handleMouseDown = () => setIsGrabbing(true);
  const handleMouseUp = () => setIsGrabbing(false);

  return (
    <section className="bg-black pb-52 px-10 md:px-28">
      {/* Header Section */}
      <div className="container mb-10 mx-auto py-20">
        <p className="font-circular-web text-lg text-blue-50">
          Explore the Zentry Universe
        </p>
        <p className="font-circular-web max-w-[25rem] text-md text-blue-50 opacity-50">
          Immerse yourself in an IP-rich product universe where AI-driven
          gamification and hyper-personalization lead humans & AI into a global
          play economy.
        </p>
      </div>

      {/* Features Section */}
      <div>
        {/* Main Feature Card */}
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={`${
            isGrabbing ? "cursor-grabbing" : "cursor-grab"
          } h-96 mb-7 w-full relative rounded-md md:h-[80vh]`}
        >
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>}
            description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
            isComingSoon
          />
        </div>

        {/* Grid Layout for Other Feature Cards */}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-4">
          {/* Feature Card 1 */}
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`row-span-1 ${
              isGrabbing ? "cursor-grabbing" : "cursor-grab"
            } md:row-span-2 col-span-2 md:col-span-1`}
          >
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />
          </div>

          {/* Feature Card 2 */}
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`row-span-1 ${
              isGrabbing ? "cursor-grabbing" : "cursor-grab"
            } col-span-2 overflow-hidden md:col-span-1 ms-32 md:ms-0`}
          >
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />
          </div>

          {/* Feature Card 3 */}
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`row-span-1 ${
              isGrabbing ? "cursor-grabbing" : "cursor-grab"
            } col-span-2 overflow-hidden md:col-span-1 me-32 md:me-0`}
          >
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>az<b>u</b>l</>}
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </div>

          {/* "More Coming Soon" Card with Tilt Effect */}
          <div className="bento-tilt_2">
            <Tilt
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
              perspective={1000}
              scale={0.95}
              transitionSpeed={500}
              style={{ width: "100%", height: "100%" }}
            >
              <div
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className={`flex size-full ${
                  isGrabbing ? "cursor-grabbing" : "cursor-grab"
                } flex-col justify-between rounded-md bg-violet-300 p-5`}
              >
                <h1 className="bento-title special-font max-w-64 text-black">
                  M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
                </h1>
                <img height={80} width={80} src="/img/logo.png" className="self-end" />
              </div>
            </Tilt>
          </div>

          {/* Feature Card 4 (Hidden on Small Screens) */}
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`row-span-1 ${
              isGrabbing ? "cursor-grabbing" : "cursor-grab"
            } hidden md:flex overflow-hidden col-span-1`}
          >
            <BentoCard src="videos/feature-5.mp4" isComingSoon isPlayed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
