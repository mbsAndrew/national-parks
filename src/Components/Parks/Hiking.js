import React from 'react';


class Hiking extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const { lat, long } = this.props;
        fetch(`https://national-parks-api.herokuapp.com/get-trails?lat=${lat}&long=${long}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data.trails
                });
                console.log(data);               
            })
    }



    render() {
        const { data } = this.state;
        return (
            <>
                {data.length > 0 &&
                    <div className={"row"}>            
                        {data.map(m => {
                            return <div className="col-3">
                                    <h3>{m.name}</h3>
                                    <h4>Rating: {m.stars}</h4>
                                   <img src={m.imgMedium} alt={m.name} />
                            </div>
                        })}
                    </div>
                }
            </>
        )
    }
}

export default Hiking;