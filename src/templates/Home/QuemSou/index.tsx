import * as S from './styles';
import C from './const';
import Title from '../../../components/Title';
import Wrapper from '../../../components/Wrapper';

const QuemSou = () => {
  return (
    <S.QuemSou>
      <Wrapper>
        <Title>{C.title}</Title>
        <S.Content>
          {C.texts.map(text => (
            <S.Text key={text}>{text}</S.Text>
          ))}
        </S.Content>
      </Wrapper>
    </S.QuemSou>
  )
}

export default QuemSou;