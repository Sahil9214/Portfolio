import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
      getDirection: true,
      smartphone: { smooth: true, multiplier: 0.8 },
      tablet: { smooth: true, multiplier: 0.9 },
    });

    // Add resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (scrollInstance.current) scrollInstance.current.update();
    });

    resizeObserver.observe(scrollRef.current);

    // Cleanup
    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  return { scrollRef, scrollInstance };
};
