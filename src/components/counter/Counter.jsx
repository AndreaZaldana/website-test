import React, {useState, useEffect} from 'react'
import './Counter.css'

const Counter = ({value, subtitle, countRef}) => {

    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      });

      if (countRef.current){
        observer.observe(countRef.current)
      }

      return () => {
        if(countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, [countRef, setIsVisible])

    useEffect(() => {
      let timer;

      if(isVisible){
        const startTime = Date.now();
        timer = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          if (elapsedTime < 1500 && count<value) {
            const increment = Math.floor((elapsedTime / 1500) * value);
            setCount(increment);
          } else {
            setCount(value);
            clearInterval(timer);
          }
        }, 100);
      }
      return () => clearInterval(timer);
    }, [isVisible, value, setCount]);
  
    return (
      <div className="counter-container">
        <div className="counter">{count}+</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    );
}

export default Counter