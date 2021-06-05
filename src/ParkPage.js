import React, { useEffect, useRef, useState } from 'react';
import Activities from './Components/Parks/Activities/Activities';
import Location from './Components/Parks/Location';
import Hero from './Components/Hero/Hero';
import HeroOptions from './Components/Hero/HeroOptions';
import Hiking from './Components/Parks/Hiking';
import BackgroundImage from './Components/BackgroundImage';
import { API_URL } from './services/url';
import Articles from './Components/Parks/Articles/Articles';
import Section from './Components/Section';

const ParkPage = ({ location, match }) => {
    const [data, setData] = useState({});
    const newsRef = useRef();
    const activitiesRef = useRef();
    const hikingRef = useRef();
    const locationRef = useRef();
    
    const refs = {
        NEWS: { text: "News", ref: newsRef},
        ACTIVITES: {text: "Activities", ref: activitiesRef},
        TRAIL: {text: "Hiking", ref: hikingRef},
        LOCATION: {text: "Location & Hours", ref: locationRef}
    }

    useEffect(() => {
        console.log(location);
        if (location.state?.data) {
            setData(data);
        } else {
            initData();
        }
    }, []);

    //get initial data about the park
    function initData() {
        const { parkID } = match.params;
        fetch(`${API_URL}/info/${parkID}`)
            .then(res => res.json())
            .then(data => {           
                console.log(data);     
                setData(data.data[0]);                
            })
    }

    //select background image for hero from images provided by NPS
    const selectHeroBackground = (imgs) => {        
        return imgs[randomNum(0, imgs.length - 1)].url;
    }

    const randomNum = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    //scrolls to the div for the information
    const scrollToDiv = (ref) => {        
        ref.current && ref.current.scrollIntoView({
            behavior: "smooth"
        });
    }
    
    return (
        <>
            {Object.keys(data).length > 0 ?
                <>                        
                        <Hero
                            isFull
                        >
                        <BackgroundImage src={selectHeroBackground(data.images)}>   
                            <Hero.Container>
                                <Hero.Title>
                                    {data.name}
                                </Hero.Title>
                                <Hero.Subtitle>
                                    {data.designation}
                                </Hero.Subtitle>
                                <Hero.Description>
                                    {data.description}
                                </Hero.Description>                                   
                                <HeroOptions onClick={scrollToDiv} refData={refs} data={data} />
                            </Hero.Container>                      
                        </BackgroundImage>                                
                        </Hero>
                        <Section ref={locationRef} name={"location"}>
                            {data.addresses && <Location addresses={data.addresses} location={{lat: data.latitude, long: data.longitude}} />}                        
                        </Section>               
                        <Section ref={hikingRef} name={"hiking"}>
                            <Hiking lat={data.latitude} long={data.longitude} />
                        </Section>
                        <Section ref={activitiesRef} name={"activites"}>
                            {data.activities.length > 0 && <Activities list={data.activities} />}
                        </Section>
                        <Section ref={newsRef} name={"news"}>
                            <Articles parkID={match.params.parkID} />
                        </Section>
                        {data.topics.length > 0 && <Activities list={data.topics} title={"Topics"} />}                                                                      
                </>
                : "No data son!"}
        </>
    )
}

export default ParkPage;