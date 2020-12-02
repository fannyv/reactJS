import React from 'react';
import styled from "@emotion/styled";
import {Button} from 'react-bootstrap';

const Header = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const ButtonStyled = styled.button<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const buttonClick = () => {
    alert("Test on click!");
};

const buttonReactClick = () => {
    alert("Test on success button click!");
};


export const App = () => {
    return (
        <div>
            <Header>Fanny test le react</Header>
            <ButtonStyled onClick={buttonClick}>Fanny</ButtonStyled>
            <Button variant="success" onClick={buttonReactClick}>Success</Button>

            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </div>
    );
}
export default App;
