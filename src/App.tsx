import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
  return (
    <div className="App">
      <Butt>asdfsdfafd</Butt>
      <Button variant="contained">
        <Typography>Hello World</Typography>
      </Button>
    </div>
  );
};

export default App;
