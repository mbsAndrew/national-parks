import React from 'react';

const Toggle = ({ open, onClick }) => {
    return (
        <div className={`activity__toggle toggle ${open && "toggle_open"}`} onClick={onClick}>
            <Bar />
            <Bar />
            <Bar />
        </div>
    )
};

const Bar = () => <div className={"toggle__bar"}>&nbsp;</div>;

export default Toggle;
