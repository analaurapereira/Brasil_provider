
import {NavbarWrapper , NavItem} from '../styles/navbar.styles';
import logoDeitado from '../assets/img/LogoDeitado.png'
import { RouteComponent } from '../routes';

export function Navbar() {
    return (
        <NavbarWrapper>
            <NavItem>
                <RouteComponent/>
                <img src={logoDeitado} alt="Brasil Provider"/>
            </NavItem>
        </NavbarWrapper>
    );
}
