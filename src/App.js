import AppRoutes from "./AppRoutes";
import TabBar from "./components/CusttomTabBar"
import styled from "styled-components";

const Container = styled.div`
  background-color: #63C2D1;
`;

function App() {
  return (
    <Container>
      <AppRoutes/>
      <TabBar/>
    </Container>
  );
}

export default App;
