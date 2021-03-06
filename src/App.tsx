import { CssBaseline } from '@mui/material';
import { Log, Messages, Request } from 'containers';
import { Route, Switch } from 'react-router';
import { UnitedJSON } from './containers/Request/UnitedJSON';
import { Layout } from './layout';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route exact path="/request" component={Request} />
          <Route exact path="/request/united_json" component={UnitedJSON} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/log" component={Log} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
