import * as S from './styles';
import { FC } from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Wrapper;