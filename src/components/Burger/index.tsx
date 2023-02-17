import * as S from './styles';
import { useState } from "react";


const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <S.Burger active={isActive} onClick={handleClick}>
      <S.Line active={isActive}/>
      <S.Line active={isActive}/>
      <S.Line active={isActive}/>
    </S.Burger>
  )
}

export default Burger;