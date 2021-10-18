import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { Button, Carousel, Container, Nav, Navbar, Placeholder } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Header = () => {
      const { user, googleSignOut } = useAuth()
      const history = useHistory()
      const handelLgoin = () => {
            history.push('/login')
      }
      const handelSignUp = () => {
            history.push('/signup')
      }
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand to="#home" className='text-info'>Faysal Diagnostic <br />Center</Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse>
                                    <Nav className="me-auto">
                                          <NavLink className='text-decoration-none mx-5' to="/home" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Home</NavLink>
                                          <NavLink className='text-decoration-none mx-5' to="/service" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Services</NavLink>
                                          <NavLink className='text-decoration-none mx-5' to="/doctor" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>Doctors</NavLink>
                                          <NavLink className='text-decoration-none mx-5' to="/About" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red"
                                          }}>About Us</NavLink>
                                    </Nav>
                                    <Button onClick={handelLgoin} variant="outline-success">LogIn</Button>
                                    {user?.email ?
                                          <Button onClick={googleSignOut} variant="outline-danger m-2">logOut</Button>
                                          :
                                          <Button onClick={handelSignUp} variant="outline-danger m-2">SignUp</Button>

                                    }
                                    <Navbar.Text className='text-warning'>
                                          Signed in as: {user.displayName}
                                    </Navbar.Text>
                              </Navbar.Collapse>

                        </Container>
                  </Navbar>

            </div>
      );
};

export default Header;