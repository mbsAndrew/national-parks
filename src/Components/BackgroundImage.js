import React from 'react';

const BackgroundImage = ({ src, children }) => {
    return (
        <>
            <div className={"background-image"}
                style={{
                    background: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            />
            {children}
        </>
    );
};

export default React.memo(BackgroundImage);
