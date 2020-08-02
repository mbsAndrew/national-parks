import React from 'react';

export default function HeroOptions({ data }) {
    return (
        <div className={"row hero_options"}>
            <div className={"col-3"}>
                <p>News</p>
            </div>
            <div className={"col-3"}>
                <p>Activities</p>
            </div>
            <div className={"col-3"}>
                <p>Hiking</p>
            </div>
            <div className={"col-3"}>
                <p>Location & Hours</p>
            </div>
        </div>  
    );
}
