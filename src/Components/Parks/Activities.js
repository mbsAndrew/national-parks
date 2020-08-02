import React from 'react';

export default function Activities (params) {    
    return (
        <>
        <h2>
            Activities
        </h2>
        <ul>
            {params.activities.map(m => {
                return <li>
                    {m.name}
                </li>;
            })}
        </ul>
        </>
    )
}