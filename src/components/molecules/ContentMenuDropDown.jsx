import styled from "styled-components";
import { v, ItemDropDown } from "../../index";

export function ContentMenuDropDown({ data, top, action }) {
  return (
    <Container top={top}>
      {data.map((item, index) => {
        return (
          <ItemDropDown
            item={item}
            key={index}
            action={() => action(item.tipo)}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${({ top }) => top};
  box-shadow: ${() => v.boxshadowGray};
`;
