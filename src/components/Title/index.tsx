import * as S from './styles';
import { TitleProps } from './props';
import { FC } from 'react';



const Title: FC<TitleProps> = ({children}) => {
  return (
    <S.Title>{children}</S.Title>
  )
}

export default Title;