import React from "react";
import {Route, Link} from 'react-router-dom';
import {useStateValue} from "../../state/state";
import {logOut} from "../../actions/index";

import Home from "../Home";

const LogOut = () => {

const [{user}] = useStateValue();

logOut()

console.log("clicked logout")


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