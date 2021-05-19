import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const List = ({ activities, onClick }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <button type={"button"} className={"activity__toggle"} onClick={() => setOpen(!isOpen)}>
            X
        </button>                           
            <CSSTransition
                in={isOpen}
                timeout={150}
                key={"activity__list"}
                classNames={"activity__list"}
            >
                <ul className={"activity__list"}>
                    {activities.map((m, i) => {
                        return <li className={"activity__list__item"} onClick={() => onClick(i)}>{m.name}</li>
                    })}
                </ul>
            </CSSTransition>
        </>
    )
};

export default React.memo(List);
