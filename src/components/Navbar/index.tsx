import * as S from './styles';
import C from './const';
import Burger from '../Burger';
import SwipeButton from '../SwipeButton';

const Navbar = () => {

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
      <S.MobileButton>
        <Burger/>
      </S.MobileButton>
    </S.Navbar>
  )
}

export default Navbar;