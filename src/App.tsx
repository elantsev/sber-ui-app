import { Button, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { Layout } from './layout';

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
    <>
      <CssBaseline />
      <Layout >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime dolor unde neque impedit eum magnam expedita architecto. Magnam fugiat blanditiis enim ducimus, reprehenderit esse assumenda dolores voluptate in optio ex eum quos sit est inventore? Error porro accusantium eveniet repellat debitis ipsa consequatur officia necessitatibus voluptatum, cumque odio unde excepturi libero ipsum reiciendis esse culpa ut iure voluptates aut velit facilis! Sit necessitatibus totam rem deleniti saepe perspiciatis quis autem maiores, tenetur nesciunt voluptatum quasi repellendus, quaerat nemo expedita! Officia et adipisci doloribus ipsum ut ea voluptatum autem omnis sed dignissimos? Voluptatibus vero iste illum, aperiam velit consequuntur quasi!</Layout>
    </>
  );
};

export default App;
