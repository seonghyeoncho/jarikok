import { styled } from "styled-components";

const Header = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <HeaderTitle>자리콕</HeaderTitle>
      <HeaderSubTitle>충북 학사 서서울관</HeaderSubTitle>
    </HeaderWrapper>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.title};
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  gap: 16px;
  
  padding: 16px;
  color: white;
`;
const HeaderTitle = styled.p`
  font-size: 24px;
`;
const HeaderSubTitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.color};
`;
export default Header;
