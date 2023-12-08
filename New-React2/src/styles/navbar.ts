import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:rgb(0, 19, 35) ;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 110px;
  z-index: 100;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 0.7em;
  padding: 1em;
  margin-right: 100px;
  font-family: 'Arial'; 
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    width: 60px;
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

