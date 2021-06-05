import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Map, Rulers, Triangle } from 'react-bootstrap-icons';

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

const Info = ({ data, children }) => {
    const [isOpen, setOpenStatus] = useState(false);

    const toggleOpen = () => {
        setOpenStatus(!isOpen);
    }
    
    return <div className={`trail__info ${isOpen && "trail__info--open"}`}>        
        <div className={"trail__toggle"} onClick={toggleOpen}>
            {children}
            <span className={"trail__toggle__icon"}>
                {isOpen ? <ChevronDown /> : <ChevronUp />}
            </span>
        </div>
        <div className={"trail__details"}>
            <Detail 
                dataPoint={data.location}
                icon={<Map title={"Location"} />}
            />
            <Detail
                dataPoint={data.length}
                icon={<Rulers title={"Length"} />}
            />
            <Detail 
                dataPoint={data.ascent}
                icon={<Triangle title={"Ascent"} />}
            />          
        </div>
    </div>
}; 

const Detail = ({ dataPoint, data, icon}) => {
    return (
        <div className={`trail__details_spec`}>
            <h5>{dataPoint}</h5>
            {icon}
        </div>
    );
}

const Scroll = ({ direction = "left", onScroll}) => {   
    const isLeft = direction === "left";     
    const scrollClick = () => onScroll(isLeft ? 20 : -20);
    return (
        <div onClick={scrollClick} className={`trail__scroll trail__scroll_${direction}`}>
            <span>
                {isLeft ? "<" : ">"}
            </span>
        </div>
    );
};

Trail.Title = Title;
Trail.Subtitle = Subtitle;
Trail.Image = Image;
Trail.Rating = Rating;
Trail.Info = Info;
Trail.Detail = Detail;

export const TrailContainer = ({ data }) => {    
    //figure out scrolling here
    const [offset, setOffset] = useState(0);

    const onScroll = (val) => {
        setOffset(prevState => {
            return prevState + val;
        });
    }

    return <>
        <Scroll onScroll={onScroll} />
        <Scroll direction={"right"} onScroll={onScroll} />
        <div style={{left: `${offset}px`, right: `${Math.abs(offset)}px`}} className={"trail__container"}>
            {data.map(item =>
                <Trail>
                    <Trail.Image data={item}>
                        <Trail.Info data={item}>
                            <Trail.Title>
                                {item.name}
                            </Trail.Title>
                            <Trail.Subtitle>
                                {`Rating: ${item.stars}`}
                            </Trail.Subtitle>
                        </Trail.Info>
                    </Trail.Image>
                </Trail>
            )}
        </div>       
    </>    
};