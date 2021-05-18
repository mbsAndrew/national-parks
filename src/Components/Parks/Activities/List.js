import React from 'react';

const List = ({ activities, onClick }) => {
    return (
        <div className={"activities__list"}>
            <ul className={""}>
                {activities.map((m, i) => {
                    return <li className={""} onClick={() => onClick(i)}>{m.name}</li>
                })}
            </ul>
        </div>
    )
};

export default React.memo(List);
