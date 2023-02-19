import * as S from './styles';
import  * as I from './props';
import gsap from 'gsap';
import { useRef } from 'react';

const ScrollTo = ({children, hash}: I.ScrollToProps) => {
  const scrollToRef = useRef<HTMLDivElement>(null)

  const handleScrollTo = () => {
    if (scrollToRef.current) {
      gsap.to(window, {
        duration: 2,
        scrollTo: {y: "#quemSou"}
      });
    }
  }

  return (
    <S.ScrollTo ref={scrollToRef} onClick={handleScrollTo} hash={hash}>
      {children}
    </S.ScrollTo>
  )
}

export default ScrollTo;