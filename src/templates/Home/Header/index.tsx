import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { useEffect, useRef } from 'react';

const Header = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const words = C.text.props.children;
  let i = 0

  console.log(words)

  const splitText = () => { 
    if(textRef.current) {
      if(i < words.length) {
        textRef.current.innerHTML += words.charAt(i)
        i++;
        setTimeout(splitText, 100)
      }
    }
  } 

  useEffect(() => {
    splitText()
  }, [])


  return (
    <S.Header>
      <Wrapper>
        <S.InitialText ref={textRef}></S.InitialText>
        <S.Profission>{C.profission}</S.Profission>
        <Button>{C.button.text}</Button>
      </Wrapper>
    </S.Header>
  )
}

export default Header;