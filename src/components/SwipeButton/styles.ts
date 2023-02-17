import styled from 'styled-components';

export const SwipeButton = styled.div<{active: boolean}>`
  width: 73px;
  height: 33px;
  background-color: ${({active, theme}) => active ? theme.colors.pinkDark : theme.colors.whiteGost};
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  transition: all .4s ease;
  position: relative;
`;

export const Circle = styled.span<{active: boolean}>`
  width: 25px;
  height: 25px;
  background-color: ${({active, theme}) => active ? theme.colors.blackRaisin : theme.colors.pinkDark};
  border-radius: 100px;
  z-index: 2;
  display: block;
  transition: all .4s ease;
  position: absolute;
  left:  ${({active}) => active ? "6px" : "43px"};
`;