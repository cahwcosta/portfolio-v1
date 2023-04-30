import * as S from './styles';
import C from './const';
import Wrapper from '../../../components/Wrapper';
import Title from '../../../components/Title';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Experiencias = () => {
  const experienciasRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)
  const optionRef = useRef<HTMLParagraphElement[]>([])
  const accordionWrapperRef = useRef<HTMLDivElement[]>([])

  const pushOptionRef = (el: HTMLParagraphElement) => optionRef.current.push(el)
  const pushAccordionWrapperRef = (el: HTMLDivElement) => accordionWrapperRef.current.push(el)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: accordionRef.current,
        markers: true,
        pin: experienciasRef.current,
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
      }
    })

    tl.to(accordionWrapperRef.current, {
      x: 10,
      stagger: 1
    })
  }, []);

  return (
    <S.Experiencias id={C.id} ref={experienciasRef}>
      <Wrapper>
        <S.Content>
          <Title>{C.title}</Title>

          <S.Accordion ref={accordionRef}>
            <S.AccordionMenu>
              {C.content.map(option => (
                <S.Option key={option.title} ref={pushOptionRef}>{option.title}</S.Option>
              ))}
            </S.AccordionMenu>
            <S.AccordionContent>
              {C.content.map(option => (
                <S.AccordionWrapper key={option.title} ref={pushAccordionWrapperRef}>
                  <S.Date>{option.date}</S.Date>
                  <S.Text>{option.text}</S.Text>
                </S.AccordionWrapper>
              ))}
            </S.AccordionContent>
          </S.Accordion>
        </S.Content>
      </Wrapper>
    </S.Experiencias>
  )
}

export default Experiencias;