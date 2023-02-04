import styled from 'styled-components';

export const Header = styled.section`
  padding-top: 237px;
`

export const InitialText = styled.p`
  font-size: 30px;
  font-weight: 550;
  line-height: 35px;

  span {
    color: ${({theme}) => theme.colors.pinkDark};
  }

  &::after {
  content: "|";
  animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 100% {opacity: 1;}
    50% {opacity: 0;}
  }
`

export const Profission = styled.div`
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 20px;
  color: ${({theme}) => theme.colors.grayTaupe};
`
