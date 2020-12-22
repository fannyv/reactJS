import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "react-bootstrap";


const header = {
    backgroundColor: '#282c34',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
};

const containerStyled = {
    display: 'flex'
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
    const [name, setName] = useState('Fanny');
    const [fragrance, setFragrance] = useState('Pamplemousse');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setFragrance(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        alert('Votre parfum favori est : ' + fragrance);
        event.preventDefault();
    }

    return <div>
        <div style={header}>Test Header</div>
        <div style={containerStyled}>
            <Button style={buttonStyled} onClick={() => setCount(count + 1)}>Click me !</Button>
            <div style={centerStyled}>
                <div style={buttonClickedStyled}> Vous avez cliqué {count} fois</div>
            </div>
        </div>
        <div style={{height: '10%', backgroundColor: 'gray'}}> in line css</div>

        <label>
            Name:
            <input type="text" onChange={onChange}/>
            <input type="submit" value="Envoyer"/>
        </label>

        <h1>Bonjour, {name}</h1>

        <div style={{height: '10%', backgroundColor: 'gray'}}> in line css</div>

        <form onSubmit={handleSubmit}>
            <label>
                Choisissez votre parfum favori :
                <select value={fragrance} onChange={handleChange}>
                    <option value="Pamplemousse">Pamplemousse</option>
                    <option value="Citron vert">Citron vert</option>
                    <option value="Noix de coco">Noix de coco</option>
                    <option value="Mangue">Mangue</option>
                </select>
            </label>
            <input type="submit" value="Envoyer"/>
        </form>
        <select multiple={true}>
            <option value="Ikea">Ikea</option>
            <option value="Castorama">Castorama</option>
            <option value="Leroy Merlin">Leroy Merlin</option>
            <option value="Brico Depot">Brico Depot</option>
        </select>

        <div style={{height: '10%', backgroundColor: 'gray'}}>Inscription d'un utilisateur</div>
        <form>
            <label>
                Nom:
                <input type={"text"} name={"username"}/>
            </label>
            <label>
                Mot de passe:
                <input type={"password"} name={"password"}/>
            </label>
            <label>
                Confirmation mot de passe:
                <input type={"password"} name={"passwordConfirmation"}/>
            </label>
            <input type="submit" value="Inscription"/>
        </form>
    </div>;
}
export default App;
