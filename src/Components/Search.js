import React from 'react';

const Search = ({children}) => {
    return (
        <div className={"search"}>
            <div className={"search-card"}>
                <h2 className={"search-card_title"}>
                    FInd Your Park
                </h2>
                {children}
            </div>
        </div>
    );
}

export default React.memo(Search);