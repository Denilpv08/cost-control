import styled from "styled-components";
import {
  Device,
  InputSearchList,
  ConvertirCapitalize,
  BtnClose,
} from "../../index";
import iso from "iso-country-currency";
import { useState } from "react";

export function ListCountry({ setSelect, setState }) {
  const isocode = iso.getAllISOCodes();
  const [dataResult, setDataResult] = useState([]);

  const select = (p) => {
    setSelect(p);
    setState();
  };

  const search = (e) => {
    let filtered = isocode.filter((item) => {
      return item.countryName == ConvertirCapitalize(e.target.value);
    });

    setDataResult(filtered);
  };

  return (
    <Container>
      <header className="title">
        <span>Buscar tu país</span>
        <BtnClose action={setState} />
      </header>
      <InputSearchList onChange={search} placeholder="Buscar..." />
      {dataResult.length > 0 &&
        dataResult.map((item, index) => {
          return (
            <ItemContainer key={index} onClick={() => select(item)}>
              <span>{item.countryName}</span>
              <span>{item.symbol}</span>
            </ItemContainer>
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 15px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  z-index: 3;
  @media ${() => Device.tablet} {
    width: 400px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.body};
  }
`;

const ItemContainer = styled.section`
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
