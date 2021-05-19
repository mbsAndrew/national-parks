import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../services/url';
import randomNum from '../../../util';
import Highlight from './Highlight';
import List from './List';

export default function Activities (params) { 
    const [activeIndex, setIndex] = useState(randomNum(0, params.activities.length));
    const [activeImage, setActiveImage] = useState("");
    const [images, setIndexImage] = useState([]);  
    const [height, setHeight] = useState("100vh");
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
                    const image = results[randomNum(0, results.length)]
                    const newArray = images;
                    newArray[index] = image;
                    setActiveImage(image);
                    setIndexImage(newArray);
                    //set active image and the image at the index
            });
        }        
    }

    //updates the index when they click on a new activity
    const updateIndex = (newIndex) => setIndex(newIndex);    

    const updateHeight = (e) => {        
        console.log(e.target.height);
        setHeight(`${e.target.height}px`);
    };

    return (
        <section>
            <div className={"container"}>
                <h2>
                    Activities
                </h2>
            </div>
            <div className={"activity"} style={{"height": height}}>
                {activeImage && <Highlight 
                    image={activeImage} 
                    title={params.activities[activeIndex]} 
                    onLoad={updateHeight}
                />}                
                <List activities={params.activities} onClick={updateIndex} />
            </div>
        </section>
    )
}