import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router';
import { Request } from './containers';
import { Layout } from './layout';


const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout >
        <Switch>
          <Route exact path="/request" component={Request} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
