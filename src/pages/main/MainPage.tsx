import styled from "styled-components"
import SeatView from "../../components/seatview/SeatView";
import Header from "../../components/header/Header";

export default function MainPageContainer() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <MainViewContaienr>
          <MainViewWrapper>
            <SeatView />
          </MainViewWrapper>
        </MainViewContaienr>

      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${ ({ theme }) => theme.colors.background };
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const MainViewContaienr = styled.div`
  width: 100%;
  height: 100%;
`;
const MainViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
