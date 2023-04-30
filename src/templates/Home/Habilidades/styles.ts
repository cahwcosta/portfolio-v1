import styled from 'styled-components';

export const Habilidades = styled.section`
position: relative;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Cards = styled.div`
  display: flex;
  width: 100%;
  max-width: 1150px;
  justify-content: center;
  flex-wrap: wrap;
`

export const Card = styled.div`
  width: 150px;
  height: 170px;
  background-color: ${({theme}) => theme.colors.blackRaisin};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  max-width: 150px;
  margin: 20px;
  transition: all .4s ease;

  &:hover {
    width: 170px;
    height: 200px;
    max-width: 170px;
    margin: 5px 10px;
    padding: 20px 0;
  }

  @media (max-width: ${({theme}) => theme.mediaQuerys.tablet}) {
    &:hover {
      width: 120px;
      height: 150px;
      padding: 10px 0;
      margin: 20px;
    }
  }

  @media (max-width: ${({theme}) => theme.mediaQuerys.mobile}) {
    width: 120px;
    height: 150px;
  }
`

export const CardTitle = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.colors.pinkDark};
  text-align: center;

  @media (max-width: ${({theme}) => theme.mediaQuerys.mobile}) {
    font-size: 16px;
    line-height: 23px;
  }
`

export const CardImg = styled.img`
  max-width: 100px;
  margin-top: 10px;

  @media (max-width: ${({theme}) => theme.mediaQuerys.mobile}) {
    max-width: 80px;
  }
`

