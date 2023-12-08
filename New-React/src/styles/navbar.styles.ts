import styled from 'styled-components';

// Estilos do componente Navbar
export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background: rgb(0, 19, 35);
    height: 150px;
    margin-top: 0;
`;

export const NavItem = styled.div`
    position: relative;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    color: whitesmoke;
    background-color: transparent;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    text-decoration: none;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        width: 50px;
        height: 50px;
        transform: scale(0);
        z-index: -1;
        background-color: #FF8A12;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &:hover::before {
        transform: scale(3);
    }

    &:hover {
        color: #212121;
        transform: scale(1.1);
        box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
    }
`;


