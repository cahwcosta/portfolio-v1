import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 60px;

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    padding: 0 25px;
  }
`
