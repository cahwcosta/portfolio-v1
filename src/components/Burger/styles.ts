import styled from 'styled-components';

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