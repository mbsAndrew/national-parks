import React from 'react';
import parkData from './data/parkData.json';
import AutoComplete from './Components/AutoComplete';
import { Redirect } from 'react-router';
import Hero from './Components/Hero/Hero';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            parkFound: false
        };
    }

    componentDidMount() {
        this.initData();
    }

    componentDidUpdate() {
        //check
    }

    initData = () => {
        const newData = parkData.map(m => m["Location Name"]);
        this.setState({
            data: newData
        });
    }

    validate = (e) => {
        const { val } = e.target.dataset;
        fetch(`https://national-parks-api.herokuapp.com/findPark/${val}`)
            .then(res => res.json())
            .then(data => {                
                if (Number(data.total) > 0) {
                    const park = data.data.filter(f => f.fullName.includes(val))[0];
                    console.log(park);
                    park ? this.setState({
                        parkFound: park.parkCode,
                        parkData: park
                    }) : alert("No parks were found! Please search again");
                } else {
                    alert("No parks were found! Please search again")
                }
            });
    }

    render() {
        const { data, parkFound, parkData } = this.state;
        console.log(parkData);
        return (
            <>
                {data &&

                    <Hero
                        img={{ url: "https://news.harvard.edu/wp-content/uploads/2019/09/leo-serrat_unsplash-1.jpg?w=1600&h=900&crop=1" }}
                    >
                        <div className={"searchBar"}>
                            <form>
                                <AutoComplete
                                    options={data}
                                    onSubmit={this.validate}
                                />
                            </form>
                        </div>
                    </Hero>
                }
                {parkFound && <Redirect to={{
                    pathname: `/info/${parkFound}`,
                    state: {
                        data: parkData
                    }
                }} />}
            </>
        )
    }
}

export default Home;