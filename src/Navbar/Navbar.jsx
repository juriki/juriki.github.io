import { Container, Nav, Navbar } from 'react-bootstrap'
import './Navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Aboute from '../AboutPage/Aboute';
import Contacts from '../ContactsPage/Contacts';

function Navibar() {
    return (
        <>
            <Navbar className='naviBar' fixed='top' collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                        <img className='logo' src='RakennusjaValvonta.png' />
                    </Navbar.Brand>
                    <p className='navbartext'>VL Rakennus ja Valvonta</p>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'>Meistä</Nav.Link>
                            <Nav.Link href='/Aboute'>Tila arviointi</Nav.Link>
                            <Nav.Link href='/Contacts'>Yhteystiedot</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        <Router>
                <Routes>
                    <Route exact path='/'/>
                    <Route exact path='/Aboute' element={<Aboute />} />
                    <Route exact path='/Contacts' element={<Contacts/>} />
                </Routes>
        </Router>
        </>
    );
}
export default Navibar;