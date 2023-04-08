import * as S from './styles';
import * as I from './props';
import C from './const';

const Modal = ({ isOpen, children }: I.ModalProps) => {
  return (
    <S.Modal isOpen={isOpen} >
      <S.Container>
        <S.CloseButton src={C.closeIconSrc}/>
        <S.Content>
          {children}
        </S.Content>
      </S.Container>
    </S.Modal>
  )
}

export default Modal;