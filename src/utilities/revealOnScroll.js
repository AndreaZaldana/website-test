import { useEffect, useState } from "react";

export const revealOnScroll = (ref) => {
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if(entry.isIntersecting){
          setIsVisible(entry.isIntersecting);
        }
      }, {
        threshold: 0.4
      });

      if (ref.current){
        observer.observe(ref.current)
      }

      return () => {
        if(ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref])

    return isVisible;
}
