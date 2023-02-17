import styled from 'styled-components';

export const QuemSou = styled.section`
margin-top: 150px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Text = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 35px;
text-align: center;
letter-spacing: 0.02em;
color: ${({theme}) => theme.colors.grayTaupe};
text-align: center;
max-width: 717px;
`
