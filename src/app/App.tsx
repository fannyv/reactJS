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
        background: "#efefef"
    }
};

const button = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#1890ff',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
        background: 'red'
    }
};

const buttonClickedStyled = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    background: '#1890ff',
    color: '#fff',
    fontSize: '14px',
    cursor: 'default',
    width: '100px',
    height: '50px'
};

const centerStyled = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};


export const App = () => {
    const [count, setCount] = useState(0);

    return <div>
        <div style={header}>Test Header</div>
        <Button style={buttonStyled} onClick={() => setCount(count + 1)}>Fanny</Button>
        <button style={button}>Button with hover</button>
        <div style={{height: '10%', backgroundColor: 'gray'}}> in line css</div>
        <div style={centerStyled}>
            <div style={buttonClickedStyled}> Vous avez cliqué {count} fois</div>
        </div>
    </div>;
}
export default App;
