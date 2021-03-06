import React, { useEffect, useState } from 'react';
import parkData from './data/parkData.json';
import AutoComplete from './Components/AutoComplete';
import { Redirect } from 'react-router';
import Search from './Components/Search';
import LandingPage from './Components/LandingPage';
import { CSSTransition } from 'react-transition-group';

const Home = () => {
    const [data, setData] = useState(false);
    const [parkFound, setFound] = useState(false);
    const [newParkData, setParkData] = useState(false);

    useEffect(() => {
        const newData = parkData.map(m => m["Location Name"]);
        setData(newData);
    }, []);

    const validate = (e) => {
        const { val } = e.target.dataset;
        console.log(process.env.REACT_APP_API_URL);
        fetch(`https://national-parks-api.herokuapp.com/findPark/${val}`)
            .then(res => res.json())
            .then(data => {
                if (Number(data.total) > 0) {
                    console.log(data);
                    const park = data.data.filter(f => f.fullName.includes(val))[0];
                    console.log(park);
                    if (park) {
                        setFound(park.parkCode);
                        setParkData(park);
                        return;
                    }
                    alert("No parks were found! Please search again");                    
                } else {
                    alert("No parks were found! Please search again")
                }
            });
    }

    return (
        <>
            {data &&
                <CSSTransition
                    classNames={"example"}
                >
                <div className={"example"}>
                    <LandingPage>
                        <Search>
                            <AutoComplete
                                options={data}
                                onSubmit={validate}
                            />
                        </Search>
                    </LandingPage>
                </div>
                </CSSTransition>
                             
            }
            {parkFound && <Redirect to={{
                pathname: `/info/${parkFound}`,
                state: {
                    data: newParkData
                }
            }} />}
        </>
    );  
}

export default React.memo(Home);