import { Route, Switch } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/details/:id" component={Details} exact />
      <Route path="*" component={PageNotFound} exact />
    </Switch>
  );
}

export default App;
