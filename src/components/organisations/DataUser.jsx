import styled from "styled-components";
import {
  UserAuth,
  BtnCircular,
  v,
  ContentMenuDropDown,
  DesplegableUser,
  useAuthStore,
} from "../../index";

export function DataUser({ stateConfig }) {
  const { user } = UserAuth();
  const { signout } = useAuthStore();

  const handleByType = async (type) => {
    if (type === "cerrarsesion") {
      await signout();
    }
  };

  return (
    <Container onClick={stateConfig.setState}>
      <div className="imgContainer">
        <img src={user.picture} />
      </div>
      <BtnCircular
        icon={<v.iconocorona />}
        width="25px"
        height="25px"
        bgcolor="#fff"
        textColor="#181616"
        fontsize="11px"
        translateX="-50px"
        translateY="-12px"
      />

      <span className="name">{user.name}</span>
      {stateConfig.state && (
        <ContentMenuDropDown
          data={DesplegableUser}
          top="60px"
          action={(p) => handleByType(p)}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .name {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
