"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import dogAnimation from "@/public/happy-dog.json";

export default function DogScrollBuddy() {
  const lottieRef = useRef(null);
  const [scrollFraction, setScrollFraction] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const fraction = scrollTop / docHeight;
      setScrollFraction(fraction);

      if (lottieRef.current) {
        const frame =
          fraction * (lottieRef.current.getDuration(true) ?? 0);
        lottieRef.current.goToAndStop(frame, true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: "80%",
        transform: "translateX(-50%)",
        top: `${30 + scrollFraction * 200}px`, // moves down while scrolling
        width: "230px",
        pointerEvents: "none", // don’t block clicks
        zIndex: 9999,
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={dogAnimation}
        loop={false}
        autoplay={false}
      />
    </div>
  );
}
