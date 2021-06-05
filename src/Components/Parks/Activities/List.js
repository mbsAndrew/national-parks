import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Toggle from './Toggle';

const List = ({ activities, onClick }) => {
    const [isOpen, setOpen] = useState(false);

    const returnClick = (index) => {
        setOpen(!isOpen);
        onClick(index);
    }

    return (
        <>
        <Toggle open={isOpen} onClick={() => setOpen(!isOpen)} />                                
            <CSSTransition
                in={isOpen}
                timeout={150}
                key={"activity__list"}
                classNames={"activity__list"}
            >
                <ul className={"activity__list"}>
                    {activities.map((m, i) => {
                        return <li className={"activity__list__item"} onClick={() => returnClick(i)}>{m.name}</li>
                    })}
                </ul>
            </CSSTransition>
        </>
    )
};

export default React.memo(List);
