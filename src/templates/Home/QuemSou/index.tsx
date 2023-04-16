import * as S from './styles';
import C from './const';
import Title from '../../../components/Title';
import Wrapper from '../../../components/Wrapper';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const QuemSou = () => {
  const quemSouRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(quemSouRef.current, {
      x: "100",
      duration: 1,
      delay: 2.5
    })
  }, [])


  return (
    <S.QuemSou id={C.id} ref={quemSouRef}>
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