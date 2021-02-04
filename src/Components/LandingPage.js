import React from 'react';
import BackgroundImage from './BackgroundImage';

const LandingPage = ({children}) => {
    return (
        <section className={"page"}>
            <BackgroundImage src={"https://news.harvard.edu/wp-content/uploads/2019/09/leo-serrat_unsplash-1.jpg?w=1600&h=900&crop=1"}>
                <div className={"page-content"}>
                    {children}
                </div>
            </BackgroundImage>                      
        </section>
    );
};

export default React.memo(LandingPage);
