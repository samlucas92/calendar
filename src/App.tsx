import React from 'react';
import{
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar/Calendar'
import Timeline from './components/timeline/Timeline'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Calendar}/>
        <Route exact path='/timeline' component={Timeline}/>
      </div>
    </Router>
  );
}

export default App;
