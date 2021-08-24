import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Result } from '../pages/Result';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/result" component={Result} />
    </Switch>
  );
}
