import styled from '@emotion/styled'


const Header = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Button = styled.button`
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

export const App = () => {
    return (
        <div>
            <Header>Fanny test le react</Header>
            <Button>Fanny</Button>
        </div>
    );
}
