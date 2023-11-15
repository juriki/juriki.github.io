import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Aboute from '../AboutPage/Aboute';
import Contacts from '../ContactsPage/Contacts';
import HomePage from '../HomePage/HomePage';


function Navibar() {
    return (
        <>
            <Navbar className='naviBar' collapseOnSelect expand="md" variant="yllow" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'>Koti</Nav.Link>
                            <Nav.Link href='/about'>Hinnasto</Nav.Link>
                            <Nav.Link href='/contacts'>Yhteystiedot</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="/">
                        <img className='Logo' src='VladLogo.png' alt="nice" />
                    </Navbar.Brand>
                </Container>

                
            </Navbar>
            
        <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/about' element={<Aboute/>} />
                    <Route exact path='/Contacts' element={<Contacts/>} />
                </Routes>
        </Router>
        </>
    );
}
export default Navibar;




