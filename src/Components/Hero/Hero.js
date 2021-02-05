import React from 'react';

const Hero = (props) => {
    const { isFull, center } = props;
    return (
        <section className={`section-hero ${isFull && "section-hero_full"} ${center && "section-hero_center"}`}>
            {props.children}
        </section>
    )
}

const HeroHOC = ({ component: Component, baseClass, ...other}) => {
    //can put a transition in there using baseClass    
    return (
        <Component baseClass={baseClass} {...other} />
    );
};

const HeroTitle = ({baseClass, addClass, children}) => {
    return (
        <h1 className={`${baseClass} ${addClass}`}>
            {children}
        </h1>
    )
}

const HeroSubtitle = ({baseClass, addClass, children}) => {
    return (
        <h2 className={`${baseClass} ${addClass}`}>
            {children}
        </h2>
    )
};

const HeroContainer = ({baseClass, addClass, children}) => {
    return (
        <div className={`${baseClass} ${addClass}`}>
            {children}
        </div>
    );
}

const HeroDescription = ({baseClass, addClass, children}) => {
    return (
        <p className={`${baseClass} ${addClass}`}>
            {children}
        </p>
    );
}

const HeroOverlay = ({addClass, children}) => {
    return (
        <div className={"section-hero_overlay"} />
    );
}

Hero.Title = (props) => <HeroHOC component={HeroTitle} baseClass={"hero-content_title"} {...props} />;
Hero.Subtitle = (props) => <HeroHOC component={HeroSubtitle} baseClass={"hero-content_subtitle"} {...props} />;
Hero.Container = (props) => <HeroHOC component={HeroContainer} baseClass={"section-hero_content hero-content"} {...props} />;
Hero.Description = (props) => <HeroHOC component={HeroDescription} baseClass={"hero-content_description"} {...props} />;
Hero.Overlay = (props) => <HeroHOC component={HeroOverlay} baseClass={"section-hero_overlay"} {...props} />;

export default Hero;


Hero.defaultProps = {
    isFull: false,
    center: false,
}