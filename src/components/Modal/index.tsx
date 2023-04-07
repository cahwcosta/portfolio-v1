import * as S from './styles';
import * as I from './props';
import C from './const';

const Modal = ({isOpen, children, className}: I.ModalProps) => {
  return (
    <S.Modal isOpen={isOpen} className={className}>
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