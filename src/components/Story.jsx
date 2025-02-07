import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import Button from "./Button";
import RoundedCorners from "./RoundedCorner";

const Story = () => {
  // Reference to the image element for applying transformations
  const frameRef = useRef(null);

  // Handle mouse movement to create a 3D tilt effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e; // Get mouse position
    const element = frameRef.current; // Reference to the image element

    if (!element) return; // Exit if the element is not found

    // Get the bounding rectangle of the image
    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left; // Mouse X position relative to the image
    const yPos = clientY - rect.top; // Mouse Y position relative to the image

    // Calculate the center of the image
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles based on mouse position
    const rotateX = ((yPos - centerY) / centerY) * -10; // Tilt on X-axis
    const rotateY = ((xPos - centerX) / centerX) * 10; // Tilt on Y-axis

    // Apply the rotation to the image using GSAP
    gsap.to(element, {
      duration: 0.3, // Animation duration
      rotateX, // Apply X-axis rotation
      rotateY, // Apply Y-axis rotation
      transformPerspective: 500, // Add perspective for 3D effect
      ease: "power1.inOut", // Smooth easing function
    });
  };

  // Reset the image to its original state when the mouse leaves
  const handleMouseLeave = () => {
    const element = frameRef.current; // Reference to the image element

    if (element) {
      // Reset rotation to 0 using GSAP
      gsap.to(element, {
        duration: 0.3, // Animation duration
        rotateX: 0, // Reset X-axis rotation
        rotateY: 0, // Reset Y-axis rotation
        ease: "power1.inOut", // Smooth easing function
      });
    }
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        {/* Subtitle */}
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>

        {/* Main content container */}
        <div className="relative size-full">
          {/* Animated title component */}
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            classes="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          {/* Image container with parallax effect */}
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                {/* Image with mouse interaction for 3D effect */}
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove} // Trigger on mouse move
                  onMouseLeave={handleMouseLeave} // Reset on mouse leave
                  onMouseUp={handleMouseLeave} // Reset on mouse up
                  onMouseEnter={handleMouseLeave} // Reset on mouse enter
                  src="/img/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Rounded corners decorative element */}
            <RoundedCorners />
          </div>
        </div>

        {/* Description and button section */}
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            {/* Description text */}
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            {/* Button to discover more */}
            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;