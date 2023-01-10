import * as S from './styles';

const Burger = ({active}: {active: boolean}) => {
  // const {firstLineRef, secondLineRef, thirdLineRef} = useAnimation(active);
  return (
    <S.Burger>
      <S.Line/>
      <S.Line/>
      <S.Line/>
    </S.Burger>
  )
}

export default Burger;