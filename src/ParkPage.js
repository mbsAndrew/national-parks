import React from 'react';
import Activities from './Components/Parks/Activities/Activities';
import Location from './Components/Parks/Location';
import Hero from './Components/Hero/Hero';
import HeroOptions from './Components/Hero/HeroOptions';
import Hiking from './Components/Parks/Hiking';
import BackgroundImage from './Components/BackgroundImage';
import { API_URL } from './services/url';
import Articles from './Components/Parks/Articles/Articles';

class ParkPage extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {}
        }
    }

    componentDidMount() {        
        const { data } = this.props.location.state || false;
        if (data) {            
            this.setState({
                data: data
            })
        } else {
            this.initData();
        }        
    }

    initData = () => {
        const { parkID } = this.props.match.params;                
        fetch(`${API_URL}/info/${parkID}`)
            .then(res => res.json())
            .then(data => {
                console.log("infoData", data);
                this.setState({
                    data: data.data[0]
                });
            })
    }

    randomNum = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    selectHeroBackground = (imgs) => {        
        return imgs[this.randomNum(0, imgs.length - 1)].url;
    }

    render() {
        const { data } = this.state;        
        const { parkID } = this.props.match.params;          
        return (
            <>
                {Object.keys(data).length > 0 ?
                    <>                        
                            <Hero
                                isFull
                            >
                            <BackgroundImage src={this.selectHeroBackground(data.images)}>   
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
                                    <HeroOptions data={data} />
                                </Hero.Container>                      
                            </BackgroundImage>                                
                            </Hero>                                                
                        {data.addresses && <Location addresses={data.addresses} location={{lat: data.latitude, long: data.longitude}} />}
                        <Hiking lat={data.latitude} long={data.longitude} />
                        {data.activities && <Activities list={data.activities} />}
                        <Articles parkID={parkID} />
                        {data.topics && <Activities list={data.topics} title={"Topics"} />}                                                                      
                    </>
                    : "No data son!"}
            </>
        )
    }
}

export default ParkPage;