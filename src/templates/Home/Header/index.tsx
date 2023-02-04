import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import { ReactNode, useEffect, useRef } from 'react';

const Header = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const text = C.text.props.children;
  let phrases: (ReactNode | string)[] = []

  text.forEach((sentence: any) => {
    if(typeof sentence === 'string') {
      phrases.push(sentence)
    } else {
      phrases.push(sentence.props.children)
    }
  })

  const finalText = phrases.join('')
  
  let i = 0;

  const splitText = () => { 
    if(textRef.current) {
      if(i < finalText.length) {
        textRef.current.innerHTML += finalText.charAt(i)
        i++;
        setTimeout(splitText, 100)
      }
      return;
    }
  } 

  useEffect(() => {
    splitText();
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