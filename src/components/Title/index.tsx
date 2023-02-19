import * as S from './styles';
import  * as I from './props';



const Title = ({children}: I.TitleProps) => {
  return (
    <S.Title>{children}</S.Title>
  )
}

export default Title;