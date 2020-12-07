import React from 'react';
import styled from "@emotion/styled";
import {Button, createStyles, IconButton, makeStyles, Theme} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import {PhotoCamera} from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {green, pink} from "@material-ui/core/colors";

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

const AvatarPink = styled(Avatar)`
  color: pink;
  backgroundColor: pink [500];
`
const AvatarGreen = styled(Avatar)`
  color: white;
  backgroundColor: green [500];
`

const buttonClick = () => {
    alert("Test on click!");
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        pink: {
            color: theme.palette.getContrastText(pink[500]),
            backgroundColor: pink[500],
        },
        green: {
            color: '#fff',
            backgroundColor: green[500],
        },
    }),
);


export const App = () => {
    const classes = useStyles();
    return <div>
        <Header>ERP</Header>
        <ButtonStyled onClick={buttonClick}>Fanny</ButtonStyled>

        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/image.jpg"/>
            <Avatar>
                <FolderIcon/>
            </Avatar>
            <Avatar className={classes.pink}>
                <PageviewIcon/>
            </Avatar>
            <Avatar className={classes.green}>
                <AssignmentIcon/>
            </Avatar>
        </div>

        <div>
            <Header>Button Test</Header>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">Primary </Button>
            <Button variant="contained" color="secondary"> Secondary </Button>
            <Button variant="contained" disabled> Disabled </Button>
            <Button variant="contained" color="primary" href="#contained-buttons"> Link </Button>
        </div>
        <div>
            <Header>Upload Test</Header>
            <Button variant="contained" color="default" startIcon={<CloudUploadIcon/>}> Upload </Button>
            <input accept="image/*" id="icon-button-file" type="file"/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera/>
                </IconButton>
            </label>
        </div>

        <div>
            <Header>what to do with the file</Header>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}> Delete </Button>
            <Button variant="contained" color="primary" endIcon={<SendIcon/>}> Send </Button>
            <Button variant="contained" disabled color="secondary" startIcon={<KeyboardVoiceIcon/>}> Talk </Button>
            <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon/>}> Save </Button>
        </div>
    </div>;
}
export default App;
