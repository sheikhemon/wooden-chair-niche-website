import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import img from '../../images/logo.png'
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand to="/home"><h2 className="logo-head"><span>WOO<img style={{ width: "60px" }} src={img} alt="" /></span>DEN</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav className="ms-auto">
                            <NavLink className="link-style" to="/home"> HOME </NavLink>
                            {user?.email ? <NavLink className="link-style live" to="/dashboard">DASHBOARD</NavLink> : <> </>}

                            {user?.email ? <NavLink
                                onClick={logOut} className="link-style login-2" to="/login">Log out</NavLink> :
                                <NavLink className="link-style login-2" to="/login">Login</NavLink>
                            }
                        </nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;