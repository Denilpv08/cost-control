import styled from "styled-components";
import { Device, BtnClose } from "../../index";

export function ListGeneric({ data, setState, action }) {
  const select = (p) => {
    action(p);
    setState();
  };

  return (
    <Container>
      <section className="contentClose">
        <BtnClose action={setState} />
      </section>
      <section className="contentItems">
        {data.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => select(item)}>
              <span>{item.icon}</span>
              <span>{item.descripcion}</span>
            </ItemContainer>
          );
        })}
      </section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  bottom: 88%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;
  @media ${() => Device.tablet} {
    width: 400px;
  }
`;

const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgtotal};
  }
`;
