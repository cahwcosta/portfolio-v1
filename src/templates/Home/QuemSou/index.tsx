import * as S from './styles';
import C from './const';
import Title from '../../../components/Title';
import Wrapper from '../../../components/Wrapper';

const QuemSou = () => {
  return (
    <S.QuemSou>
      <Wrapper>
        <Title>{C.title}</Title>
        <S.Text>{C.text}</S.Text>
      </Wrapper>
    </S.QuemSou>
  )
}

export default QuemSou;