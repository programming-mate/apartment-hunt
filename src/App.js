import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashBoard from './component/DashBoard/DashBoard/DashBoard';
import BookingDetails from './component/BookingDetails/BookingDetails';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/Login/PrivateRoute';

export const UserContext = createContext();

function App() {

  const[loggedInUser, setLoggedInUser] = useState({})

  return (
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
          </Route>
          <Route  path='/booking/:id' component={BookingDetails} />
          <Route path="/about" component={DashBoard} />
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
          <DashBoard></DashBoard>
          </PrivateRoute>
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
