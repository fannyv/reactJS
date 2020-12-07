import React from "react";
import {Button} from "react-bootstrap";

const buttonClick = () => {
    alert("Test on click!");
};

const header = {
    backgroundColor: '#282c34',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
};


const buttonStyled = {
    padding: '32px',
    backgroundColor: 'hotpink',
    fontSize: '24px',
    borderRadius: '4px',
    color: 'black'

    /*   &:hover {
   color: white;
    }*/
};

export const App = () => {
    return <div>
        <div style={header}>Test Header</div>
        <Button style={buttonStyled} onClick={buttonClick}>Fanny</Button>
    </div>;
}
export default App;
