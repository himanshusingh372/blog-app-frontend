import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { doLogout, getCurrentUserDetail, isLoggedIn } from "../auth";
import userContext from "../context/userContext";

const CustomNavbar = () => {
  const userContextData = useContext(userContext);
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false);
      userContextData.setUser({
        data: null,
        login: false,
      });

      navigate("/");
    });
  };

  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        className="px-5"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          // height: "8%",
          zIndex: "100",
        }}
      >
        <NavbarBrand tag={ReactLink} to="/">
          MyBlogs
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                New Feed
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/services">
                Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/contactus">
                Contact Us
              </NavLink>
            </NavItem>

            {/* <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/services">
                  Contact Us
                </DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Youtube</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>

          <Nav navbar>
            {login && (
              <>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    {user.email}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      tag={ReactLink}
                      to={`/user/profile-info/${user.id}`}
                    >
                      Profile Info
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/user/dashboard">
                      Dashboard
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={logout} className="curser">
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            )}

            {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
