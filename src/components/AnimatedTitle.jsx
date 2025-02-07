import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {useRef } from 'react';

const AnimatedTitle = ({ title, classes }) => {
    const containerRef=useRef()

    useGSAP(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "100 bottom",
              end: "center bottom",
              toggleActions: "play none none reverse",
            },
          });
    
          tl.to(
            ".animated-word",
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
              ease: "power1.inOut",
              stagger: { each: 0.02, from: "random" }            },
            0
          );
    
      }, []);

    return (
        <div ref={containerRef} className={`animated-title ${classes}`}>
            {title.split("<br />").map((line, index) => (
                <div key={index} className='flex-center gap-2 flex-wrap md:gap-3 px-10'>
                    {line.split(' ').map((word, wordIndex) => (
                        <span className='animated-word'  key={wordIndex} dangerouslySetInnerHTML={{ __html: word }} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTitle;