import styled from 'styled-components';

export const Burger = styled.div`
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

export const Line = styled.div`
  height: 3px;
  width: 35px;
  background: ${({theme}) => theme.colors.pinkDark};
  position: absolute;
  border-radius: 50px;

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 50%;
  }

  &:nth-child(3) {
    top: 100%;
  }
`;