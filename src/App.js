import React from 'react';
import logo from './logo.svg';
import './App.css';
import useModal from './customHooks/useModal';
import Modal from './customHooks/Modal';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom'
import Search from './Search';
import Login from './Login';

const App = () => {
  const {isShowing, toggle} = useModal();
 
  const encodeString = 'IG9iamVjdCA6IHsgCiAgICAgICAgInNvdXJjZUlEIjogIjk5OTkiLAogICAgICAgIAogICAgICAgICJyZXR1cm5QYXRoIjogImh0dHBzOi8vcWEudndteXZ3dWkuc3ZjLnd1c2EuaW8vb2F1dGgyL2F1dGgiLAogICAgICAgIAogICAgICAgICJlbWFpbCI6ICJ2b3BmbjEwN0BtYWlsbmF0b3IuY29tIgogICAgICAgIAogfQ=='
  const decodeString = atob(encodeString)
  let angelEjmplo = decodeString.replace(/"/g, "");
  console.log('angelEjmplo',angelEjmplo);
  let arrayDecoded = angelEjmplo.split(" ").filter(word => word.trim().length > 0);
  console.log('angelEjmplo a Array', arrayDecoded);


  // let angelArray = decodeString.split(" ")
  // let removeWhiteSpace = angelArray.filter(word => word.trim().length > 0)
  // console.log('removeWhiteSpace',removeWhiteSpace )
  // console.log('removeWhiteSpace-Specific',removeWhiteSpace[3] )
  // let convertArrtoObject = {...removeWhiteSpace}
  // console.log('convertArrtoObject', convertArrtoObject[3])

  return (
    <div className="App">
      <Router>
      <Link to="/search?q=AndresPerro">Search Page </Link>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h2>Footer!</h2>
    </div>
  );
}

export default App;
