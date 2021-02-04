import React from 'react';
import Activities from './Components/Parks/Activities';
import Topics from './Components/Parks/Topics';
import Location from './Components/Parks/Location';
import Hero from './Components/Hero/Hero';
import HeroOptions from './Components/Hero/HeroOptions';
import Hiking from './Components/Parks/Hiking';
import LandingPage from './Components/LandingPage';
import BackgroundImage from './Components/BackgroundImage';

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
        console.log(parkID);
        fetch(`https://national-parks-api.herokuapp.com/info/${parkID}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    data: data.data[0]
                });
            })
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <>
                {Object.keys(data).length > 0 ?
                    <>                        
                            <Hero
                                isFull
                            >
                            <BackgroundImage src={data.images[2].url}>   
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
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col-12"}>
                                    {data.activities && <Activities activities={data.activities} />}
                                    {data.topics && <Topics topics={data.topics} />}
                                </div>
                            </div>
                        </div>                       
                    </>
                    : "No data son!"}
            </>
        )
    }
}

export default ParkPage;