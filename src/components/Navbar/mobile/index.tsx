import * as S from './styles';
import C from '../const';
import { useRef, useState } from 'react';
import SwipeButton from '../../SwipeButton';

const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const hiddenContentRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleActiveBurger = () => {
    setIsActive(!isActive);
    if (hiddenContentRef.current && menuRef.current) {
      if (isActive == false) {
        hiddenContentRef.current.style.height = `${menuRef.current.clientHeight}px`
        console.log()
      } else {
        hiddenContentRef.current.style.height = "0";
      }
    }
  }
  return (
    <S.Navbar>
      <S.Header>
        <S.Title>{C.title}</S.Title>
        <S.MobileButton>
          <S.Burger active={isActive} onClick={handleActiveBurger}>
            <S.Line active={isActive}/>
            <S.Line active={isActive}/>
            <S.Line active={isActive}/>
          </S.Burger>
        </S.MobileButton>
      </S.Header>

      <S.HiddenContent ref={hiddenContentRef}>
        <S.Menu ref={menuRef}>
          <S.Options>
            {C.options.map(option => (
              <S.Option key={option.text}><a>{option.text}</a></S.Option>
            ))}
          </S.Options>
        <SwipeButton/>
        </S.Menu>
      </S.HiddenContent>
    </S.Navbar>
  )
}

export default NavbarMobile;