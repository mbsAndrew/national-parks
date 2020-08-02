import React from 'react';
import parkData from './data/parkData.json';
import AutoComplete from './Components/AutoComplete';
import { Redirect } from 'react-router';

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
            console.log(data);
            if (Number(data.total) > 0) {
                const park = data.data.filter(f => f.fullName.includes(val))[0];
                park ? this.setState({
                    parkFound: park.parkCode
                }) : alert("No parks were found! Please search again");
            } else {
                alert("No parks were found! Please search again")
            }
        });
    }

    render() {
        const { data, parkFound } = this.state;       
        console.log(data);
        return (
            <>
              {data &&
                    <div className={"searchBar"}>
                        <form>
                            <AutoComplete
                                options={data}
                                onSubmit={this.validate}
                            />
                        </form>
                    </div>                    
              }
              {parkFound && <Redirect to={`/info/${parkFound}`} /> }
            </>
        )
    }
}

export default Home;