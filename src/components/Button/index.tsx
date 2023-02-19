import * as I from './props';
import * as S from './styles';

const Button = ({ children, onClick, ...props }: I.ButtonProps) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  )
}

export default Button;