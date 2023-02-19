import * as S from './styles';
import C from '../const';
import { useState } from 'react';

const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveBurger = () => {
    setIsActive(!isActive);
  }

  return (
    <S.Navbar>
      
    </S.Navbar>
  )
}

export default NavbarMobile;