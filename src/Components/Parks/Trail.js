import React, { useState } from 'react';

const Title = ({children}) => {
    return <h3 className={"trail__title"}>{children}</h3>;
};

const Subtitle = ({children}) => {
    return  <h4 className={"trail__subtitle"}>{children}</h4>;
};

const Image = ({ data, children }) => {
    //make custom hook to get mobile? to determine what image to use.
    return <div className={"trail__body"}>
        <img className={"trail__image"} src={data.imgMedium} alt={data.name} />
        {children}
    </div>
};

const Rating = () => {
    //may change this to stars?
};

const Trail = (props) => {
    return <div className={"trail"}>
            {props.children}
        </div>;
};

const MoreInfo = ({ data }) => {
    const [isOpen, setOpenStatus] = useState(false);

    const toggleOpen = () => {
        setOpenStatus(!isOpen);
    }

    return <div className={`trail__info trail__details ${isOpen && "trail__info--open"}`}>
        <div className={"trail__details__toggle"} onClick={toggleOpen}>
            <span>X</span>
        </div>
        <div className={"trail__details__info"}>
            <p>
                {data.conditionDetails}
            </p>
            <p>
                {data.conditionStatus}
            </p>
        </div>
    </div>
};

Trail.Title = Title;
Trail.Subtitle = Subtitle;
Trail.Image = Image;
Trail.Rating = Rating;
Trail.MoreInfo = MoreInfo;

export const TrailContainer = ({ data }) => {
    console.log(data);
    return <div className={"container_trail"}>
        {data.map(item => 
            <Trail>
                <Trail.Title>
                    {item.name}
                </Trail.Title>
                <Trail.Subtitle>
                    {`Rating: ${item.stars}`}
                </Trail.Subtitle>
                <Trail.Image data={item}>
                    <Trail.MoreInfo data={item} />
                </Trail.Image>
            </Trail>
        )}
    </div>
    //use this to render instead of having everything
};