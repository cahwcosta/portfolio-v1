import styled from 'styled-components';
import * as I from './props';

export const Modal = styled.section<I.ModalProps>`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  position: fixed;
  background-color: rgba(31, 19, 31, 0.6);
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.blackRaisin};
  border-radius: 10px;
  padding: 20px;
`;

export const CloseButton = styled.img`
  width: 30px;
  align-self: flex-end;
  cursor: pointer;
`;

export const Content = styled.div``;