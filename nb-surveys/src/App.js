import './App.css';
import Survey from './components/Survey'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/surveys'>
          <div>
            Route for answering surveys
          </div>

        </Route>
        <Route path='/'>
          <Survey />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
