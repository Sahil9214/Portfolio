import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true
) => ({
  from: from,
  to: from + 360,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  }, [spinDuration, controls, onHover, text, currentRotation]);

  const handleHoverStart = () => {
    // Speed up rotation on hover
    controls.stop();
    controls.start({
      rotate: currentRotation + 360,
      scale: 1.05, // Slight scale increase for visual feedback
      transition: getTransition(spinDuration / 3, currentRotation), // 3x faster
    });
  };

  const handleHoverEnd = () => {
    // Return to normal speed when hover ends
    controls.stop();
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  };

  return (
    <motion.div
      initial={{ rotate: 0, opacity: 1 }}
      className={`hidden lg:block mx-auto  rounded-full w-[200px] h-[200px] text-white font-black text-center cursor-pointer origin-center flex-shrink-0 mr-8 ${className}`}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const transform = `rotate(${rotation}deg) translate(0, -70px)`;

        return (
          <span
            key={i}
            className="absolute inline-block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
