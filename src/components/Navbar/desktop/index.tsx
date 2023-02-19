import * as S from './styles';
import C from '../const';
import SwipeButton from '../../SwipeButton';
import ScrollTo from '../../ScrollTo';

const NavbarDesktop = () => {
  return (
    <S.Navbar>
      <S.Title>{C.title}</S.Title>
      <S.CenterContent>
        <S.Menu>
          <S.Options>
            {C.options.map(option => (
              <ScrollTo key={option.id} hash={option.id}>
                <S.Option>{option.text}</S.Option>
              </ScrollTo>
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