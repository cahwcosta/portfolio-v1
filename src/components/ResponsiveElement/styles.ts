import styled from 'styled-components';

export const ResponsiveElement = styled.section``

export const Content = styled.div`
  display: initial;

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    display: none;
  }
`

export const Mobile = styled.div`
display: none;

@media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
  display: initial;
}
`
