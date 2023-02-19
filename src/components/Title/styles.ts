import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 20px;
  text-align: center;
  margin-top: 175px;

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    font-size: 25px;
    line-height: 30px;
    padding-bottom: 10px;
    margin-top: 75px;
  }
`
