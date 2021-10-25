import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';
import { Counter } from './features/counter/Counter';

const Butt = styled(Button)`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const App = () => {
  const a: number = 1 + 'as';
  return (
    <div className="App">
      <header className="App-header">
        <Butt>asdfsdfafd</Butt>
        <Button variant="contained">
          {'  '}
          <Typography>Hello World</Typography>
        </Button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
