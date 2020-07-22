import React from 'react';
import parkData from './data/parkData.json';
import AutoComplete from './Components/AutoComplete';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.key = process.env.REACT_APP_API_KEY;
        this.baseURL = "https://developer.nps.gov/api/v1"
        this.state = {
            data: false
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
        // fetch(`https://developer.nps.gov/api/v1/parks?parkCard=acad&api_key=${this.key}`, {
        //     "method": "GET",
        //     "headers": {
        //         "Authorization": this.key
        //     }
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // });
    }

    render() {
        const { data } = this.state;
        console.log(data);
        console.log(this.props);
        return (
            <>
              {data &&
                    <form onSubmit={this.validate}>                    
                    <AutoComplete
                        options={data}
                    />
                    </form>
              }              
            </>
        )
    }
}

export default Home;