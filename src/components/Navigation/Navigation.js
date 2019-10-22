import React from "react";
import {Link, Route} from 'react-router-dom';
import Message from "../../Messages/Message";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home";

function Nav() {
    return (
        <div>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/requests">Requests</Link>
            <Link to="/signout">Sign Out</Link>

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/requests" component={Message} />
            <Route path="/signout" component={Home} />
        </div>
    )
}

export default Nav