import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, {
      threshold: 0,
      rootMargin: "-50% 0px"
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isOnScreen;
};