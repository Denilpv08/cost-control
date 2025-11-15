import {
  MyRoutes,
  Light,
  Dark,
  AuthContextProvider,
  Sidebar,
  Device,
  Menuambur,
  useUsersStore,
} from "./index";
import { createContext, useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery } from "@tanstack/react-query";

export const ThemeContext = createContext(null);

function App() {
  const { displayUsers, datausers } = useUsersStore();
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = datausers.theme === "0" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;

  const { isLoading, error } = useQuery({
    queryKey: ["Mostrar usuarios"],
    queryFn: () => displayUsers(),
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error..</h1>;
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          {pathname != "/login" ? (
            <Container className={sidebarOpen ? "active" : ""}>
              <div className="contentSidebar">
                <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
              </div>
              <div className="contentMenuambur">
                <Menuambur />
              </div>

              <Containerbody>
                <MyRoutes />
              </Containerbody>
            </Container>
          ) : (
            <MyRoutes />
          )}

          <ReactQueryDevtools initialIsOpen={true} />
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.2s ease-in-out;

  .contentSidebar {
    display: none;
  }

  .contentMenuambur {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuambur {
      display: none;
    }
  }
`;

const Containerbody = styled.div`
  grid-column: 1;
  width: 100%;

  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
