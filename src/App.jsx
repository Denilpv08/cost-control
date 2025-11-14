import {
  MyRoutes,
  Light,
  Dark,
  AuthContextProvider,
  Sidebar,
  Device,
  Menuambur,
} from "./index";
import { createContext, useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { useLocation } from "react-router-dom";

export const ThemeContext = createContext(null);

function App() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState("dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
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
