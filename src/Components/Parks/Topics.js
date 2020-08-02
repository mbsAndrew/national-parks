import React from 'react';

export default function Topics(params) {
    return (
        <>
            <h2>Topics</h2>
            <ul>
                {params.topics.map(m => {
                    return <li>
                        {m.name}
                    </li>
                })}
            </ul>
        </>
    )
}