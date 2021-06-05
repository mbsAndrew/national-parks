import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../services/url';
import randomNum from '../../../util';
import Highlight from './Highlight';
import List from './List';

const Activities = ({ list, title = "Activities" }) => { 
    const [activeIndex, setIndex] = useState(randomNum(0, list.length));
    const [activeImage, setActiveImage] = useState("");
    const [images, setIndexImage] = useState([]);      
    
    useEffect(() => {
        getNewImage(activeIndex);
    }, [activeIndex]);

    const getNewImage = (index) => {
        if (images[index]) {            
            //use an image already fetched
            setActiveImage(images[index]);
        } else {
            //grab an image from the API
            console.log(index);
            const { name } = list[index];
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

    return (
        <>
            <div className={"container"}>
                <h2>
                    {title}
                </h2>                
            </div>
            <div className={"activity"}>
                {activeImage && <Highlight
                    image={activeImage}
                    title={list[activeIndex]}                    
                />}
                <List activities={list} onClick={updateIndex} />
            </div>
            
        </>
    )
}

export default React.memo(Activities);