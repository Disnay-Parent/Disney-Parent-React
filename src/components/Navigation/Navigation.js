import React, {useState} from 'react';
import {logOut} from "../../actions/index";
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
            <Navbar color=
            "light" light expand="md">
              <NavbarBrand href="/">Disney Parent</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Register</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/messages/">Messages</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/login/">Login</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink onClick={() => localStorage.clear()} href="/"  >
                        LogOut </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink href="/messages/" >
                        Messages </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
            {/* Add Messaging to Navbar  */}
        </div>
      )
    
}

export default Navigation;