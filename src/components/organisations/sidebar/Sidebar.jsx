import styled from "styled-components";
import {
  v,
  LinksArray,
  SecondarylinksArray,
  SidebarCard,
} from "../../../index";
import { NavLink } from "react-router-dom";

export function Sidebar({ state, setState }) {
  return (
    <Main isOpen={state}>
      <span className="sidebarbutton" onClick={() => setState(!state)}>
        {<v.iconoflechaderecha />}
      </span>
      <Container isOpen={state} className={state ? "active" : ""}>
        <div className="logocontent">
          <div className="imgcontent">
            <img src={v.logorayo} />
          </div>
          <h2>Denilpv</h2>
        </div>
        {LinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "linkContainer active" : "linkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links${isActive ? ` active` : ``}`}
            >
              <div className="linkicon">{icon}</div>
              <span className={state ? "label_see" : "label_hidden"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <Divider />
        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "linkContainer active" : "linkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links${isActive ? ` active` : ``}`}
            >
              <div className="linkicon">{icon}</div>
              <span className={state ? "label_see" : "label_hidden"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <Divider />
        {state && <SidebarCard />}
      </Container>
    </Main>
  );
}
const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }
  .logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)}
        rotate(${({ theme }) => theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }
  .linkContainer {
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 0 5%;
    position: relative;
    &:hover {
      background: ${({ theme }) => theme.bgAlpha};
    }
    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => v.smSpacing} - 2px) 0;
      color: ${({ theme }) => theme.text};
      height: 60px;
      .linkicon {
        padding: ${() => v.smSpacing} ${() => v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      .label_see {
        transition: 0.3s ease-in-out;
        opacity: 1;
      }
      .label_hidden {
        opacity: 0;
      }
      &.active {
        color: ${({ theme }) => theme.bg5};
        font-weight: 600;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${({ theme }) => theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }
    &.active {
      padding: 0;
    }
  }
`;

const Main = styled.div`
  .sidebarbutton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bgtgderecha};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
      0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${({ theme }) => theme.text};
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
