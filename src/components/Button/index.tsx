import { FC } from 'react';
import { ButtonProps } from './props';
import * as S from './styles';

const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  )
}

export default Button;