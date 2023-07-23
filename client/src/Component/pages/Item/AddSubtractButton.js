import { Button } from "./Button";
import styled from "styled-components";
import React from "react";

//ADD AND SUB BUTTON USED IN CART

const AddSubtractButton = styled(Button).attrs(() => ({
  backgroundColor: "darkGray"
}))`
  font-weight: 900;
  font-size: 18px;
  padding: 2px 8px;
`;
export const AddButton = ({ ...props }) => (
  <AddSubtractButton {...props}>+</AddSubtractButton>
);

export const SubtractButton = ({ ...props }) => (
  <AddSubtractButton {...props}> &#8210;</AddSubtractButton>
);

