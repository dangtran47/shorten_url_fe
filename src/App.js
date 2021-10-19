import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage'
import GetLinkPage from './pages/GetLinkPage'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/:shortenName'>
            <GetLinkPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
