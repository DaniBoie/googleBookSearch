import React from 'react';
// IMPORT for links on page
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// IMPORT for other pages on site
import Navbar from './components/Navbar'
import Search from './pages/Search'
import Saved from './pages/Saved'

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <nav>
            <Switch>
              <Route exact path='/' component={Search}></Route>
              <Route path='/' component={Saved}></Route>
            </Switch>
          </nav>
        </div>
      </Router>
    </>
  );
}

export default App;
