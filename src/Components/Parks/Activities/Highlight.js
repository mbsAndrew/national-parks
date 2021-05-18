import React from 'react';

const Highlight = ({image, title}) => {
    console.log(image);
    return (
        <div className={"activity__highlight"}>
            <img src={image.urls.regular} alt={image.alt_description} />
            <h3 className={"activity__highlight__title"}>
                {title.name}
            </h3>
        </div>
    );
}

export default React.memo(Highlight);