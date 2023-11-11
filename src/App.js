import AppRoutes from "./AppRoutes";
import TabBar from "./components/CusttomTabBar"
import styled from "styled-components";

const Container = styled.div`
  background-color: #63C2D1;
`;

function App() {

  const id = sessionStorage.getItem("id")

  return (
    <Container>

      {id && <TabBar/> }
      
      <AppRoutes/>
    </Container>
  );
}

export default App;
