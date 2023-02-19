import * as S from './styles';
import C from './const';
import Title from '../../../components/Title';
import Wrapper from '../../../components/Wrapper';

const Habilidades = () => {
  return (
    <S.Habilidades>
      <Wrapper>
        <S.Content>
          <Title children={C.title}/>
          <S.Cards>
            {C.cards.map(card => (
              <S.Card key={card.title}>
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardImg src={`imgs/habilidades/${card.img}.png`}></S.CardImg>
              </S.Card>
            ))}
          </S.Cards>
        </S.Content>
      </Wrapper>
    </S.Habilidades>
  )
}

export default Habilidades;