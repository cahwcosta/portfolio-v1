import styled from 'styled-components';

export const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 27px 60px;
  border-bottom: 1px solid ${({theme}) => theme.colors.pinkDark};
  position: fixed;
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


export const RightContent = styled.div`
display: flex;

@media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
  display: none;
}
`
