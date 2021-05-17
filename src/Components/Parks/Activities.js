import React, { useEffect, useState } from 'react';
import { API_URL } from '../../services/url';

export default function Activities (params) {   
    const [images, setImages] = useState([]);

    useEffect(() => {
        const activities = params.activities.map(m => m.name);
        fetch(`${API_URL}/images?page=1?query=${activities.join(",")}`)
        .then(res => {
            console.log(res);
        });
    }, [params.activities]);
    

    return (
        <section>
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
        </section>
    )
}