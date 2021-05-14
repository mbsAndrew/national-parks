import React from 'react';

const BackgroundImage = ({ src, children }) => {
    return (
        <>
            <div className={"background-image"}
                style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            />
            {children}
        </>
    );
};

export default React.memo(BackgroundImage);
