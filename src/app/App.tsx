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

const formulaireLabel = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    backgroundColor: 'gray'
}

const formulaireContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const formulaireContent = {
    border: '2px solid cornflowerblue',
    padding: '3px',
    display: 'flex',
    flexDirection: "column"
}

const rowForm = {
    margin: "1px",
    display: 'flex',
}

const inputStyle = {
    flexGrow: 1,
    border: 'none',
    borderBottom: '2px solid lightblue'
}

const submitInput = {
    backgroundColor: 'lightblue',
    borderColor: 'cornflowerblue',
    marginTop: "15px"
}

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
        <div style={formulaireLabel}>Inscription d'un utilisateur</div>
        <form style={formulaireContainer}>
            <div style={formulaireContent as React.CSSProperties}>
                <p style={{color: "lightblue", fontWeight: "bold"}}>Vous : </p>
                <p style={rowForm}>
                    <label>Nom:</label>
                    <input type={"text"} name={"username"} style={inputStyle}/>
                </p>
                <p style={rowForm}>
                    <label>Prénom:</label>
                    <input type={"text"} name={"firstName"} style={inputStyle}/>
                </p>
                <p style={rowForm}>
                    <label>Email:</label>
                    <input type={"email"} name={"email"} style={inputStyle}/>
                </p>
                <p style={rowForm}>
                    <label> Mot de passe:</label>
                    <input type={"password"} name={"password"} style={inputStyle}/>
                </p>
                <p style={rowForm}>
                    <label>
                        Confirmation mot de passe:
                        <input type={"password"} name={"passwordConfirmation"} style={inputStyle}/>
                    </label>
                </p>
                <input type="submit" value="Inscription" style={submitInput}/>
            </div>
        </form>

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

        <div>
            <p><label>Un commentaire ?</label></p>
            <textarea name={"column"} cols={10} rows={5}>Zone de commentaire pour l'utilisateur </textarea>
        </div>

    </div>;
}
export default App;
