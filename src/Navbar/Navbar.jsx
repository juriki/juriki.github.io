import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Aboute from '../AboutPage/Aboute';
import Contacts from '../ContactsPage/Contacts';
import Order from '../OrderPage/Order';


function Navibar() {
    return (
        <>
            <Navbar className='naviBar' collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                        <img className='logo' src='RakennusjaValvonta-1.png' alt="My Awesome Image" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                            <Nav.Link href='/order'>Tila Arviointi</Nav.Link>
                            <Nav.Link href='/about'>Meistä</Nav.Link>
                            <Nav.Link href='/contacts'>Yhteystiedot</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        <Router>
                <Routes>
                    <Route exact path='/order' element={<Order/>} />
                    <Route exact path='/about' element={<Aboute/>} />
                    <Route exact path='/Contacts' element={<Contacts/>} />
                </Routes>
        </Router>
        </>
    );
}
export default Navibar;