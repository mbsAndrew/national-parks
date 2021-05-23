import React, { useEffect, useState } from 'react';
import { API_URL } from '../../services/url';
import { TrailContainer } from './Trail';

const Hiking = ({lat, long}) => {
    const [data, setData] = useState(false);    
    useEffect(() => {
        fetch(`${API_URL}/get-trails?lat=${lat}&long=${long}`)
        .then(res => res.json())
        .then(data => {
            setData(data.trails);                         
        })
    }, [lat, long]);
    
    return (
        <>
            {data && data.length > 0 && <TrailContainer data={data} />}                
        </>
    )
}

export default React.memo(Hiking);