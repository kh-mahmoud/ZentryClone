import { Navigation } from "lucide-react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react"
import animation from "../assets/animation.json"
import { useWindowScroll } from 'react-use';
import gsap from "gsap";



const Navbar = () => {
    const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
    const waves = useRef(null)
    const audioElement = useRef(null);
    const [isplaying, setIsPlaying] = useState(false);
    const [isNavVisible, setisNavVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { y: currentScrollY } = useWindowScroll();
    const navRef = useRef()



    useEffect(() => {
        if (currentScrollY === 0) {
            setisNavVisible(true);
            navRef.current.classList.remove("floating-nav");
            navRef.current.classList.remove("border-hsla");
            navRef.current.classList.add("border-transparent");

        } else if (currentScrollY > lastScrollY) {

            setisNavVisible(false);
            navRef.current.classList.add("floating-nav");
        } else
            if (currentScrollY < lastScrollY) {

                setisNavVisible(true);
                navRef.current.classList.add("floating-nav");
                navRef.current.classList.add("border-hsla");

            }

   

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])



    const toggleAudio = () => {
        setIsPlaying((prev) => !prev);
    }

    useEffect(() => {
        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
            ease: "power1.inOut"
        })
    }, [isNavVisible])

    useEffect(() => {
        if (isplaying) {
            waves.current.play()
            audioElement.current.play()
        }
        else {
            waves.current.stop()
            audioElement.current.pause()
        }
    }, [isplaying])


    return (
        <div ref={navRef} className="fixed flex items-center justify-between inset-x-0 top-4 z-50 h-16 transition-all duration-700 md:inset-x-6">
            <header className="w-full">
                <nav className="flex items-center justify-between p-6 size-full">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-8" />

                        <Button
                            title={"Products"}
                            rightIcon={<Navigation className='text-black size-4' />}
                            classes={"bg-blue-50 hidden md:flex border-1 border-black justif-center items-center gap-1"}
                        />
                    </div>

                    <div className="flex h-full items-center">

                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button onClick={toggleAudio} className="ml-10 flex items-center space-x-0.5">
                            <audio className="hidden" src="/audio/loop.mp3" loop ref={audioElement} ></audio>
                            <Lottie lottieRef={waves} loop={true} animationData={animation} />
                        </button>

                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
