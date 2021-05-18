import React, { useState } from 'react';

const List = ({ activities, onClick }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <button type={"button"} className={"activity__toggle"} onClick={() => setOpen(!isOpen)}>
            X
        </button>
            {isOpen &&
                <ul className={"activity__list"}>                    
                    {activities.map((m, i) => {
                        return <li className={"activity__list__item"} onClick={() => onClick(i)}>{m.name}</li>
                    })}
                </ul>
            }       
        </>
    )
};

export default React.memo(List);
