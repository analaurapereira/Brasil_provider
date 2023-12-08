import { NavbarWrapper, NavItem, NavList } from '../styles/navbar.ts';
import logoDeitado from '../assets/img/LogoDeitado.png';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <NavbarWrapper>
      <a href="/home" style={{width:'200px', background:'rgb(0, 19, 35)', height:'100px'}}>
        <img
          src={logoDeitado}
          alt="Brasil Provider"
          style={{ height: '120px', width: 'auto' }}
        />
      </a>
      <NavList>
        <ul className='lista'>
          <NavItem>
            <Link to="/home" style={{ color: 'whitesmoke', textDecoration: 'none' }}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/serviços" style={{ color: 'whitesmoke', textDecoration: 'none' }}>
              Serviços
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/portifolio" style={{ color: 'whitesmoke', textDecoration: 'none' }}>
              Portfólio
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/sobrenos" style={{ color: 'whitesmoke', textDecoration: 'none' }}>
              Sobre Nós
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contato" style={{ color: 'whitesmoke', textDecoration: 'none' }}>
              Contato
            </Link>
          </NavItem>
        </ul>
      </NavList>
    </NavbarWrapper>
  );
}

