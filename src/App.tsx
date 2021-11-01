import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router';
import { Request } from './containers';
import { UnitedJSON } from './containers/Request/UnitedJSON';
import { Layout } from './layout';


const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout >
        <Switch>
          <Route exact path="/request" component={Request} />
          <Route exact path="/request/united_json" component={UnitedJSON} />
        </Switch>
      </Layout>

    </>
  );
};

export default App;
