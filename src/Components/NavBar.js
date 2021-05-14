import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar () {
    return (
        <div className={"container"}>        
            <div className={"row"}>
                <div className={"col-12"}>
                    <Link to={"/"} >Home</Link>                
                </div>                
            </div>
        </div>
    );
}