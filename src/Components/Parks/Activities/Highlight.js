import React from 'react';

const Highlight = ({image, title, onLoad}) => { 
    console.log(image);   
    const { profile_image, name, instagram_username, twitter_username } = image.user
    return (
        <>
        <img className={"activity__image"} src={image.urls.regular} alt={image.alt_description} onLoad={onLoad} />   
        <div className={"activity__details"}>
            <h3 className={"activity__details__title"}>
                {title.name}
            </h3>
            <div className={"image-details"}>
                <div className={"image-details__user"}>
                    <img className={"image-details__user__headshot"} src={profile_image.medium} alt={name} />
                    <div className={"image-details__user__name"}>
                        {name}
                    </div>
                    {twitter_username && <div className={"image-details__user__social"}>
                            <a href={`https://twitter.com/${twitter_username}`}>
                                {`${twitter_username}`}
                            </a>
                    </div>}
                    {instagram_username && <div className={"image-details__user__social"}>
                        <a href={`https://www.instagram.com/${instagram_username}`} target={"_blank"} rel="noopener noreferrer">
                            {`@${instagram_username}`}</a>
                    </div>}
                </div>
            </div>
        </div>
        </>
    );
}

export default React.memo(Highlight);