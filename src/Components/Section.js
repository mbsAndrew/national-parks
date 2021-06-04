import React from 'react';
import { useScrollCheck } from '../hooks/useScrollCheck';

const Section = React.forwardRef((props, ref) => { 
    const isVisible = useScrollCheck(ref);
    return (
        <section ref={ref} className={`section ${props.name}__section`}>
            {isVisible ? props.children : "Waiting..."}
        </section>
    );
});

export default React.memo(Section);
