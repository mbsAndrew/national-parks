import React from 'react';

export default function HeroOptions({ data, onClick, refData }) {    
    return (
        <div className={"row hero-content_options"}>
            {Object.values(refData).map(item => {                
                return <div onClick={() => onClick(item.ref)} className={"col-3"}>
                    <p>{item.text}</p>
                </div>
            })}            
        </div>  
    );
}
