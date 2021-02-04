import React from 'react';

const Hero = (props) => {
    const { isFull, center } = props;
    return (
        <section className={`section-hero ${isFull && "section-hero_full"} ${center && "section-hero_center"}`}>
            {props.children}
        </section>
    )
}

const HeroTitle = ({addClass, children}) => {
    return (
        <h1 className={`hero-content_title ${addClass}`}>
            {children}
        </h1>
    )
}

const HeroSubtitle = ({addClass, children}) => {
    return (
        <h2 className={`hero-content_subtitle ${addClass}`}>
            {children}
        </h2>
    )
};

const HeroContainer = ({addClass, children}) => {
    return (
        <div className={`section-hero_content hero-content ${addClass}`}>
            {children}
        </div>
    );
}

const HeroDescription = ({addClass, children}) => {
    return (
        <p className={`hero-content_description ${addClass}`}>
            {children}
        </p>
    );
}

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;
Hero.Container = HeroContainer;
Hero.Description = HeroDescription;

export default Hero;


Hero.defaultProps = {
    isFull: false,
    center: false,
}