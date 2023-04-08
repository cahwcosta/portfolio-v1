import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Modal from '../../../components/Modal';


const Header = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (headerRef.current) {
  //       gsap.to(headerRef.current, {
  //         scrollTrigger: {
  //           trigger: headerRef.current,
  //           markers: true,
  //           start: "top top",
  //           end: "bottom bottom"
  //         }
  //       })
  //   }
  // }, [])


  return (
    <S.Header ref={headerRef}>
      <Wrapper>
        <S.Content>
          <S.InitialText ref={textRef}>{C.text}</S.InitialText>
          <S.Profission>{C.profission}</S.Profission>
          <Button>{C.button.text}</Button>
        </S.Content>
      </Wrapper>
    </S.Header>
  )
}

export default Header;