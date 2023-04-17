import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


const Header = () => {
  const textRef = useRef<HTMLParagraphElement[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  const pushTextRef = (el: HTMLParagraphElement) => textRef.current.push(el)

  useEffect(() => {
    const tl = gsap.timeline();
      tl.to(textRef.current, {y: -100, opacity: 1, duration: 1.1, stagger: 0.5})
      tl.to(buttonRef.current, {opacity: 1, duration: 0.6})
  }, [])

  return (
    <S.Header id={C.id}>
      <Wrapper>
        <S.Content>
          {C.texts.map((text, index) => (
            <S.InitialText ref={pushTextRef} key={index}>{text}</S.InitialText>
          ))}
          <S.Profission ref={pushTextRef} >{C.profission}</S.Profission>
          <S.ButtonAnimation ref={buttonRef}>
            <Button>{C.button.text}</Button>
          </S.ButtonAnimation>
        </S.Content>
      </Wrapper>
    </S.Header>
  )
}

export default Header;