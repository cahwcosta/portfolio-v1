import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';

const Header = () => {
  return (
    <S.Header>
      <Wrapper>
        <S.InitialText>{C.text}</S.InitialText>
        <S.Profission>{C.profission}</S.Profission>
        {/* <Button/> */}
      </Wrapper>
    </S.Header>
  )
}

export default Header;