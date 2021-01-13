import React from "react";

const header = {
    backgroundColor: '#282c34',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
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

export const Home = () => {
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
    </div>
}
export default Home;
