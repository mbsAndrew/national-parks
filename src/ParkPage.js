import React from 'react';
import HeroImage from './Components/HeroImage';
import Activities from './Components/Parks/Activities';
import Topics from './Components/Parks/Topics';

class ParkPage extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.initData();
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
                        <HeroImage
                            img={data.images[2]}
                        >
                            <h1>
                                {data.fullName}
                            </h1>
                            <h2>
                                {data.designation}
                            </h2>
                            <p>
                                {data.description}
                            </p>
                        </HeroImage>
                        {data.activities && <Activities activities={data.activities} />}
                        {data.topics && <Topics topics={data.topics} />}
                        
                    </>
                    : "No data son!"}
            </>
        )
    }
}

export default ParkPage;