import * as S from './styles';
import * as I from './props'


const Wrapper = ({ children }: I.WrapperProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Wrapper;