import styled from "styled-components";
import { v } from "../../index";

export function Selector({ colour, state, action, text1, text2 }) {
  return (
    <Container colour={colour} onClick={action}>
      <div>
        <span>{text1}</span>
        <span>{text2}</span>
      </div>
      <span className={state ? "open" : "close"}>{<v.iconoFlechabajo />}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid ${({ colour }) => colour};
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  transition: 0.3s;
  font-weight: 600;
  box-shadow: 4px 9px 20px -12px ${({ colour }) => colour};

  .open {
    transition: 0.3s;
    transform: rotate(0deg);
  }

  .close {
    transition: 0.3s;
    transform: rotate(180deg);
  }

  &:hover {
    background-color: ${({ colour }) => colour};
    color: #000;
  }
`;
