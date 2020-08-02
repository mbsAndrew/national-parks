import React from 'react';

const HeroImage = (props) => {
    const { img } = props;
    return (
        <div className={"hero"}>
            <div className={"hero_img"} 
                style={{
                    background: `url(${img.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            />
            <div className={"hero_overlay"} />
            <div className={"hero_content"}>
                {props.children}
            </div>
        </div>
    )
}

export default HeroImage;
