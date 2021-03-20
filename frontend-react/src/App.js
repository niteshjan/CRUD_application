import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponenet from './components/FooterComponenet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
function App() {
  return (
    <div>
      <Router>        
          <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={AddEmployeeComponent}></Route>
              <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
              <ListEmployeeComponent />
            </Switch>     
          </div>
          <FooterComponenet/>
      </Router>
    </div>
  );
}

export default App;
