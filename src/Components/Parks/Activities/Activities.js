import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../services/url';
import randomNum from '../../../util';
import Highlight from './Highlight';
import List from './List';

export default function Activities (params) { 
    const [activeIndex, setIndex] = useState(randomNum(0, params.activities.length));
    const [activeImage, setActiveImage] = useState("");
    const [images, setIndexImage] = useState([]);    
    console.log(params);
    useEffect(() => {
        getNewImage(activeIndex);
    }, [activeIndex]);

    const getNewImage = (index) => {
        if (images[index]) {            
            //use an image already fetched
            setActiveImage(images[index]);
        } else {
            //grab an image from the API
            const { name } = params.activities[index];
            fetch(`${API_URL}/images?page=1&query=${name}`)
                .then(res => res.json())
                .then(res => {
                    const { results } = res.images;
                    console.log("images", res);
                    setActiveImage(results[randomNum(0, results.length)]);
                    //set active image and the image at the index
            });
        }        
    }

    //updates the index when they click on a new activity
    const updateIndex = (newIndex) => setIndex(newIndex);    

    return (
        <section>
            <div className={"container"}>
                <h2>
                    Activities
                </h2>
            </div>
            <div className={"activity"}>
                {activeImage && <Highlight image={activeImage} title={params.activities[activeIndex]} />}                
                <List activities={params.activities} onClick={updateIndex} />
            </div>
        </section>
    )
}