import styled from "styled-components";

const Btn = styled.button`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: fit-content;
  cursor: pointer;
`;

function Button(props) {
  return (
    <Btn onClick={props.onClick}>
      {props.children}
    </Btn>
  );
}

export default Button;
