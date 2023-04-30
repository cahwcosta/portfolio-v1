import styled from 'styled-components';

export const Experiencias = styled.section`
`;

export const Content = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

export const Accordion = styled.div`
  display: flex;
`;

export const AccordionMenu = styled.div`
  width: 25%;
`;

export const Option = styled.p`
  font-size: 20px;
  line-height: 24px;
  padding: 22px 0 22px 33px;

  &:first-child {
    border-left: 5px solid ${({theme}) => theme.colors.pinkDark};
    color: ${({theme}) => theme.colors.pinkDark};
  }
`;

export const AccordionContent = styled.div`
  width: 75%;
  position: relative;
`;

export const AccordionWrapper = styled.div`
  position: absolute;
  top: 0;

  &:not(:first-child){
    opacity: 0;
  }
`;

export const Date = styled.p`
  font-size: 23px;
  color: ${({theme}) => theme.colors.white};
  line-height: 27.6px;
  padding-bottom: 23px;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${({theme}) => theme.colors.grayTaupe};
`;