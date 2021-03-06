import React, {useState} from 'react';
// import {logOut} from "../../actions/index";
// import Messages from "../../Messages/Messages";
// import { Route } from "react-router-dom";
// import PrivateRoute from "../../utils/PrivateRoute";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
        return(
          <div>
            <Navbar style={{backgroundColor: '#253b57'}} light expand="md">
              <NavbarBrand style={{color: '#E0E4E9'}} href="/dashboard">
                {props.name === "parent" ? "Disney Parent" : "Disney Volunteer"}
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink style={{color: '#E0E4E9', marginRight: '10px'}} href="/">Register</NavLink>
                  </NavItem>
                  {/*<NavItem>
                    <NavLink href="/messages/">Messages</NavLink>
                  </NavItem>*/}
                  <NavItem>
                    <NavLink style={{color: '#E0E4E9', marginRight: '10px'}} href="/login/">Login</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink style={{color: '#E0E4E9', marginRight: '10px'}} onClick={() => localStorage.clear()} href="/"  >
                        LogOut </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink style={{color: '#E0E4E9', marginRight: '10px'}} href="/messages/"
                  // Need help with onMouseover
                    // onMouseOver={{textDecoration: "uppercase", backgroundColor: "#78BEE7"}} 
                    >
                        Messages </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            {/* Add Messaging to Navbar  */}
            
        </div>
      )
    
}

export default Navigation;