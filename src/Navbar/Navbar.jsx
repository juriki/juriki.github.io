import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Aboute from '../AboutPage/Aboute';
import Contacts from '../ContactsPage/Contacts';
import HomePage from '../HomePage/HomePage';
import Kuvat from '../KuvatPage/Kuvat';


function Navibar(props) {
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
                            <Nav.Link href='/kuvat'>Kuvat</Nav.Link>

                           

                        </Nav>
                    </Navbar.Collapse>
                    <div style={{float: 'right',  marginBottom: '-7px'}}>
                    <Navbar.Brand href="/">
                        <img className='Logo' src='VladLogo.png' alt="nice" />
                    </Navbar.Brand>
                    <p style={{float: 'right', color: 'white'}} className='pName'>
                    VL-Valvonta <br/>ja Rakennus
                        </p>
                    </div>
  
                </Container>

                
            </Navbar>
            
        <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/about' element={<Aboute/>} />
                    <Route exact path='/Contacts' element={<Contacts/>} />
                    <Route exact path='/kuvat' element={<Kuvat/>} />                    
                </Routes>
        </Router>
        </>
    );
}
export default Navibar;




