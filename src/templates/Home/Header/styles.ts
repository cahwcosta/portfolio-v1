import styled from 'styled-components';

export const Header = styled.section`
  padding-top: 300px;

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    padding-top: 150px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InitialText = styled.p`
  font-size: 30px;
  font-weight: 550;
  line-height: 35px;
  text-align: center;

  span {
    color: ${({theme}) => theme.colors.pinkDark};
  }

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    font-size: 23px;
    line-height: 27px;
  }
`

export const Profission = styled.div`
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 20px;
  color: ${({theme}) => theme.colors.grayTaupe};
  text-align: center;

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    font-size: 17px;  
  }
`
