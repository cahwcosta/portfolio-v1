import * as S from './styles';
import C from './const';
import Title from '../../../components/Title';

const Contato = () => {
  return (
    <S.Contato id={C.id}>
      <Title>{C.title}</Title>
    </S.Contato>
  )
}

export default Contato;