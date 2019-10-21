import React from "react";
import {Route, Link} from 'react-router-dom';

import Home from "../Home";

const LogOut = () => {

    return (
        <div>

        <Link exact to="/">
             <h3>Home</h3>
        </Link> 
      
        <Route exact path="/" component={Home} />
        </div>
    )
}

export default LogOut