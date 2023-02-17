import styled from 'styled-components';

export const QuemSou = styled.section`
margin-top: 150px;
`

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

export const Text = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 35px;
text-align: center;
letter-spacing: 0.02em;
color: ${({theme}) => theme.colors.grayTaupe};
text-align: left;
max-width: 480px;

&:first-child {
  padding-right: 30px;
  border-right: 1px solid ${({theme}) => theme.colors.pinkDark};
}
&:last-child {
  padding-left: 40px;
}
`
