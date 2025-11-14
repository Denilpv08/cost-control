import styled from "styled-components";
import { useAuthStore, UserAuth } from "../index";

export function Home() {
  const { signout } = useAuthStore();
  const { user } = UserAuth();

  return (
    <Container>
      <h1>Bienvenido - {user.name}</h1>
      <img src={user.picture} />
      <button onClick={signout}>Cerrar Sesion</button>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
