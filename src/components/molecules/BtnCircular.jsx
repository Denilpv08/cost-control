import styled from "styled-components";

export function BtnCircular({
  icon,
  width,
  height,
  bgcolor,
  textColor,
  fontsize,
  translateX,
  translateY,
}) {
  return (
    <Container
      bgcolor={bgcolor}
      textColor={textColor}
      height={height}
      width={width}
      fontsize={fontsize}
      translateX={translateX}
      translateY={translateY}
    >
      <span>{icon}</span>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translatex(${({ translateX }) => translateX})
    translateY(${({ translateY }) => translateY});

  span {
    font-size: ${({ fontsize }) => fontsize};
    text-align: center;
    color: ${({ textColor }) => textColor};
  }
`;
