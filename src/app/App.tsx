import React, {useState} from "react";
import {Button} from "react-bootstrap";


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
    color: 'black',
    "&:hover": {
        color: 'white'
    }
};

export const App = () => {
    const [count, setCount] = useState(0);

    return <div>
        <div style={header}>Test Header</div>
        <Button style={buttonStyled} onClick={() => setCount(count + 1)}>Fanny</Button>
        <div style={{height: '10%', backgroundColor: 'gray'}}>
            Vous avez cliqué {count} fois
        </div>
    </div>;
}
export default App;
