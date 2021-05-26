import './App.css';
import Survey from './components/Survey'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AnswerSurveys from './components/AnswerSurveys';

function App() {

  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/'><a class="nav-link" aria-current="page">Make Survey</a></Link>
              </li>
              <li class="nav-item">
              <Link to='/surveys'><a class="nav-link" aria-current="page">Answer Survey</a></Link>
              </li>
            </ul>

        </div>
      </nav>
      <Switch>
        <Route path='/surveys'>
          <AnswerSurveys />

        </Route>
        <Route path='/'>
          <Survey />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
