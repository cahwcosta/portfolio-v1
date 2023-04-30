import styled from 'styled-components';

export const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 27px 60px;
  border-bottom: 1px solid ${({theme}) => theme.colors.pinkDark};
  position: fixed;
  z-index: 1;
  background-color: ${({theme}) => theme.colors.blackEerie};

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    padding: 23px 25px;
  }
`

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    font-size: 25px;
  }
`

export const CenterContent = styled.div``

export const Menu = styled.nav`
  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    display: none;
  }
`

export const Options = styled.ul`
  display: flex;
  list-style: none;
`

export const Option = styled.li`
  margin: 0 20px;
  font-size: 17px;
  transition: color .5s ease;
  cursor: pointer;

  &:last-child {
    margin-right: 0%;
  }

  &:hover {
    color: ${({theme}) => theme.colors.pinkDark};
  }

  a {
    cursor: pointer;
  }
`

export const MobileButton = styled.button`
display: none;
width: 35px;
height: 40px;
align-items: center;
justify-content: center;
background: none;
border: none;
padding: 8px 0;

@media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
  display: flex;
}
`

export const Burger = styled.div<{active: boolean}>`
  display: none;
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    display: block;
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

@media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
  display: none;
}
`
