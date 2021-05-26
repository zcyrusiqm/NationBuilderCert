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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/'><span className='nav-link'  aria-current="page">Make Survey</span></Link>
              </li>
              <li className="nav-item">
              <Link to='/surveys'><span className='nav-link' aria-current="page">Answer Survey</span></Link>
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
