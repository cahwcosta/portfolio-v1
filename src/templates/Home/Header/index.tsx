import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { useRef } from 'react';


const Header = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  if(headerRef.current) {
    gsap.to(headerRef.current, {
      scrollTrigger: headerRef.current
    })
  }

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