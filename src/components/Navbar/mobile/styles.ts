import styled from 'styled-components';

export const Navbar = styled.section`
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.pinkDark};
  position: fixed;
  z-index: 1;
  background-color: ${({theme}) => theme.colors.blackEerie};
  padding: 23px 25px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 25px;
`

export const  HiddenContent = styled.div`
  height: 0;
  overflow: hidden;
  transition: all .4s ease;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-bottom: 20px;
`

export const Option = styled.li`
  margin: 20px 0;
  font-size: 25px;
  transition: color .5s ease;

  &:hover {
    color: ${({theme}) => theme.colors.pinkDark};
  }

  a {
    cursor: pointer;
  }
`

export const MobileButton = styled.button`
display: flex;
width: 35px;
height: 40px;
align-items: center;
justify-content: center;
background: none;
border: none;
padding: 8px 0;
`

export const Burger = styled.div<{active: boolean}>`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const Line = styled.div<{active: boolean}>`
  height: 3px;
  width: 35px;
  background: ${({theme}) => theme.colors.pinkDark};
  position: absolute;
  border-radius: 50px;
  transition: all .4s ease;

  &:nth-child(1) {
    top: ${({active}) => active ? "50%" : 0};
    transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0deg)"};
  }

  &:nth-child(2) {
    top: 50%;
    transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0deg)"};
  }

  &:nth-child(3) {
    top: ${({active}) => active ? "50%" : "100%"};
    transform: ${({active}) => active ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`;


export const RightContent = styled.div`
display: flex;
`
