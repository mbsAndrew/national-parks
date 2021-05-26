import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar () {
    return (
        <div className={"nav"}>
            <Link className={"nav__link"}>
                Home
            </Link>
        </div>       
    );
}