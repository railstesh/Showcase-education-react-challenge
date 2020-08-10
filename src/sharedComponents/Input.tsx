import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em 0;
  width: ${props => props.width ? props.width : '100%'};
  background: white;
  border: 1px solid gray;
  border-radius: 3px;
`;
