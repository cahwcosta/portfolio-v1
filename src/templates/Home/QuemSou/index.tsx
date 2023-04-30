import * as S from './styles';
import C from './const';
import Title from '../../../components/Title';
import Wrapper from '../../../components/Wrapper';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const QuemSou = () => {
  const quemSouRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(quemSouRef.current, {
      xPercent: -50,
      left: "50%",
      opacity: 1,
      duration: 0.7,
      delay: 2.6
    })
  }, [])


  return (
    <S.QuemSou id={C.id} ref={quemSouRef}>
      <Title>{C.title}</Title>
        <S.Content>
          {C.texts.map(text => (
            <S.Text key={text}>{text}</S.Text>
          ))}
        </S.Content>
    </S.QuemSou>
  )
}

export default QuemSou;