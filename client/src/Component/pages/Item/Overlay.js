import styled from "styled-components";
// this is style  for open and closing for cart button
export const Overlay = styled.div`
  background-color: rgba(128, 128, 128, 0.5);
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: ${({ open }) => (open ? "block" : "none")};
`;
