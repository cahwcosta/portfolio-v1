import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Title from '../../../components/Title';

const Experiencias = () => {
  return (
    <S.Experiencias>
      <Wrapper>
        <S.Content>
          <Title>{C.title}</Title>
        </S.Content>
      </Wrapper>
    </S.Experiencias>
  )
}

export default Experiencias;