import styled from "styled-components";
import {
  Header,
  Selector,
  v,
  ListCountry,
  useUsersStore,
  ListGeneric,
  TemasData,
  BtnSave,
} from "../../index";
import { useState } from "react";

export function ConfigurationTemplate() {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState([]);
  const [selectTheme, setSelectTheme] = useState([]);
  const [stateListCountry, setStateListCountry] = useState(false);
  const [stateListTheme, setStateListTheme] = useState(false);
  const { datausers, editthemecurrencyuser } = useUsersStore();

  const currency = select.symbol ? select.symbol : datausers.currency;
  const country = select.countryName ? select.countryName : datausers.country;
  const coutrySelect = "⚡" + currency + " " + country;

  const iconbd = datausers.theme === "0" ? "☀️" : "🌚";
  const themebd = datausers.theme === "0" ? "light" : "dark";
  const themeinitial = selectTheme.theme ? selectTheme.theme : themebd;
  const iconinitial = selectTheme.icon ? selectTheme.icon : iconbd;
  const themeSelect = iconinitial + " " + themeinitial;

  const handleEdit = async () => {
    const themeElected = selectTheme.descripcion === "light" ? "0" : "1";
    const p = {
      theme: themeElected,
      currency: currency,
      country: country,
      id: datausers.id,
    };

    await editthemecurrencyuser(p);
  };

  return (
    <Container>
      <header className="header">
        <Header stateConfig={{ state: open, setState: () => setOpen(!open) }} />
      </header>
      <section className="area2">
        <h1>AJUSTES</h1>
        <ContentCard>
          <span>Moneda:</span>
          <Selector
            state={stateListCountry}
            colour={v.colorselector}
            text1={coutrySelect}
            action={() => setStateListCountry(!stateListCountry)}
          />
          {stateListCountry && (
            <ListCountry
              setSelect={(p) => setSelect(p)}
              setState={() => setStateListCountry(!stateListCountry)}
            />
          )}
        </ContentCard>
        <ContentCard>
          <span>Tema: </span>
          <Selector
            text1={themeSelect}
            colour={v.colorselector}
            state={stateListTheme}
            action={() => setStateListTheme(!stateListTheme)}
          />
          {stateListTheme && (
            <ListGeneric
              data={TemasData}
              setState={() => setStateListTheme(!stateListTheme)}
              action={setSelectTheme}
            />
          )}
        </ContentCard>
        <BtnSave
          title="Guardar"
          bgColor={v.colorselector}
          icon={<v.iconoguardar />}
          action={handleEdit}
        />
      </section>
      <section className="main"></section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area2" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
    align-self: center;

    h1 {
      font-size: 3rem;
    }
  }
`;

const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;
