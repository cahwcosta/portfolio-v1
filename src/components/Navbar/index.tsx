import * as S from './styles';
import C from './const';
import Burger from '../Burger';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Title>{C.title}</S.Title>
      <S.RightContent>
        <S.Menu>
          <S.Options>
            {C.options.map(option => (
              <S.Option key={option.text}><a>{option.text}</a></S.Option>
            ))}
          </S.Options>
        </S.Menu>
        <S.MobileButton>
          {/* <Burger=/> */}
        </S.MobileButton>
      </S.RightContent>
    </S.Navbar>
  )
}

export default Navbar;