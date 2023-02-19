import * as S from './styles';
import C from '../const';
import SwipeButton from '../../SwipeButton';
import { useState } from 'react';

const NavbarDesktop = () => {

  return (
    <S.Navbar>
      <S.Title>{C.title}</S.Title>
      <S.CenterContent>
        <S.Menu>
          <S.Options>
            {C.options.map(option => (
              <S.Option key={option.text}><a>{option.text}</a></S.Option>
            ))}
          </S.Options>
        </S.Menu>
      </S.CenterContent>

      <S.RightContent>
        <SwipeButton/>
      </S.RightContent>
      
    </S.Navbar>
  )
}

export default NavbarDesktop;