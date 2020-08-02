import React from 'react';

const Hero = (props) => {
    const { img } = props;
    return (
        <section className={"section_hero"}>
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
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero;
