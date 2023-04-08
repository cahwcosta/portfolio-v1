import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${({theme}) => theme.colors.pinkDark};
  border-radius: 50px;
  color: ${({theme}) => theme.colors.whiteGost};
  padding: 15px 35px;
  background: none;
  font-size: 17px;
  transition: all .5s ease;

  &:hover {
    background-color: ${({theme}) => theme.colors.pinkDark};
  }

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    padding: 14px 30px;
    font-size: 15px;
  }
`
