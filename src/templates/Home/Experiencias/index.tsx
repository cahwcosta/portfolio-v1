import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Title from '../../../components/Title';

const Experiencias = () => {
  return (
    <S.Experiencias id={C.id}>
      <Wrapper>
        <S.Content>
          <Title>{C.title}</Title>

          <S.Accordion>
            <S.AccordionMenu>
              {C.content.map(option => (
                <S.Option>{option.title}</S.Option>
              ))}
            </S.AccordionMenu>
            <S.AccordionContent>
                
            </S.AccordionContent>
          </S.Accordion>
        </S.Content>
      </Wrapper>
    </S.Experiencias>
  )
}

export default Experiencias;