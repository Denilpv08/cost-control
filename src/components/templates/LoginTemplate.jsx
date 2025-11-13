import styled from "styled-components";
import { BtnSave, v, useAuthStore } from "../../index";

export function LoginTemplate() {
  const { signInGoogle } = useAuthStore();

  return (
    <Container imgfondo={v.imagenfondo}>
      <div className="contentCard">
        <span className="version">Versión 1.0</span>
        <div className="contentImg">
          <img src={v.logorayo} />
        </div>
        <Title>Denilpv - Gastos</Title>
        <p className="frase">Toma el control de tus gastos e ingresos</p>
        <ContainerBtn>
          <BtnSave
            title="Iniciar Sesion"
            icon={<v.iconogoogle />}
            bgColor={v.colorSecundario}
            action={signInGoogle}
          />
        </ContainerBtn>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${(props) => props.imgfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  .contentCard {
    background-color: #131313;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    .version {
      color: #727272;
      text-align: start;
    }
    .contentImg {
      img {
        max-width: 60%;
        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }
    .frase {
      color: #909090;
      font-size: 1.2rem;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;
