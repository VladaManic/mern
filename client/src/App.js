import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/general/Header';
import Home from './containers/pages/Home';
import Add from './containers/pages/Add';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
			  <Route exact path='/add/'>
          <Add/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
