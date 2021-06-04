import { useState, useEffect } from 'react';

export function useScrollCheck(ref) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        console.log(ref.current);
        if (ref.current) {
            const observer = new IntersectionObserver((entries, observer) => {                
                entries.forEach((item) => {                    
                    if (item.isIntersecting) {
                        setInView(true);
                        observer.unobserve(ref.current);
                    }                    
                })
            });
            observer.observe(ref.current);            
        }
    }, [ref]);
    return inView;
};