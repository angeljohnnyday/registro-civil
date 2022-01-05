import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import style from './navbar-menu.module.css'
// import logo from 'assets/img/logo.png'


const NavbarMenu = () => {
    return (
        <Navbar
            variant='dark'
            expand='md'
            // fixed='top'  
            className={style.color_nav}
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand as={Link} to='/'> 
                    <div className={style.menu_title}>
                        Información sobre <span className={style.strong}>trámites</span>
                    </div>
                </Navbar.Brand>
                {/* <Navbar.Brand>
                    <img
                        src={logo}
                        // width='30'
                        height='60'
                        className='d-inline-block align-top'
                        alt='React Bootstrap logo'
                    />
                </Navbar.Brand> */}
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/tramites'>TRÁMITES</Nav.Link>
                        <Nav.Link as={Link} to='/servicios-de-linea'>SERVICIOS EN LÍNEA</Nav.Link>
                        <Nav.Link as={Link} to='/nuestras-oficinas'>NUESTRAS OFICINAS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu
