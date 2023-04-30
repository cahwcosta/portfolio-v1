import styled from 'styled-components';

export const QuemSou = styled.section`
  opacity: 0;
  position: relative;
  left: -50%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 0 25px;
  }
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

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    max-width: 100%;
    text-align: center;
    font-size: 15px;
    line-height: 25px;

    &:first-child {
      padding-right: 0;
      border-right: none;
      padding-bottom: 20px;
    }

    &:last-child {
      padding-left: 0;
    }
  }
`
