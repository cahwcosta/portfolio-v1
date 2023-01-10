import styled from 'styled-components';

export const Header = styled.section`
  padding-top: 237px;
`

export const InitialText = styled.div`
  font-size: 30px;
  font-weight: 550;
  line-height: 35px;

  span {
    color: ${({theme}) => theme.colors.pinkDark};
  }
`

export const Profission = styled.div`
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 10px;
  color: ${({theme}) => theme.colors.grayTaupe};
`
