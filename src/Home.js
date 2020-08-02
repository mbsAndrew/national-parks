import React from 'react';
import parkData from './data/parkData.json';
import AutoComplete from './Components/AutoComplete';

class Home extends React.Component {
    constructor(props) {
        super(props);        
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
    }

    validate = (e) => {

    }

    render() {
        const { data } = this.state;       
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