import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Profile from '../Profiles/Profile.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';
import Login from '../Login/Login.js'
import TeacherProfile from '../Profiles/TeacherProfile.js';
import TestPage from '../TestPage/TestPage.js';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/test' component={TestPage} />
          <Route exact path='/teacher/profile' component={TeacherProfile} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}