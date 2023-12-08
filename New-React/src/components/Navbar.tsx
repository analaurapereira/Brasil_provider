
import {NavbarWrapper , NavItem} from '../styles/navbar.styles.ts';
import logoDeitado from '../assets/img/LogoDeitado.png'
import { RouteComponent } from '../routes.tsx';

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
