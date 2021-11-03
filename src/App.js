import { React, useEffect,useState } from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';
import './App.css';
import App1 from './components/App1';
import Profile from './components/Profile';
import Register from './components/Register';
import Test from './components/test';
import CommonProfileWindow from './components/CommonProfileWindow';
import EmployeeList from './components/EmployeeList';
import AddminLogin from './components/AddminLogin';






import { LoginContext} from './Helper/Context';
const App = () => {

  const { isLoggedIn } = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();

    useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token !== undefined && token !== null) {
    dispatch(userAuthenticated({ token: token }))
    }
  }, []);

  const [loggedIn,setLoggedIn]=  useState(false);

  const DATA = [
    { id: "todo-0", name: "The green used on this website make it look different from common white blogs with black fonts. The color combination attracts the attention of the viewers."},
    { id: "todo-1", name: "The website does not use a lot of different color combinations. However, green and white works well with the overall design of the blog, which makes this comment section design worth mentioning."},
    { id: "todo-2", name: "The designer of this website definitely loves to play with soft colors and we must say that he is doing a great job. The color combinations are appealing and soothing at the same time."}
  ];
  
  return <BrowserRouter>
    <LoginContext.Provider value={{loggedIn,setLoggedIn}}>
       <Navbar />
      
      <Switch>
      <Route exact path="/addmin" render={() => (isLoggedIn ? <EmployeeList/> : <AddminLogin/>)} />
      <Route exact path="/" render={() => (isLoggedIn ? <Dashboard /> : <HomePage/>)} />
      <Route path="/dashboard" render={() => (isLoggedIn ? <Redirect to='/'/> : <Dashboard/>)} />
      <Route path="/commonprofilewindow" render={() => (isLoggedIn ? <CommonProfileWindow/> : <CommonProfileWindow />)} />
      <Route path="/register" render={() => (isLoggedIn ? <Register/> : <Register/>)} />

      <Route path="/support" render={() => (isLoggedIn ? <Test tasks={DATA}/> : <Test tasks={DATA}/>)} />


      <Route path="/profile" render={() => (isLoggedIn ? <Profile/> : <Profile/>)} />
      <Route path="/homepage" render={() => (isLoggedIn ? <Redirect to='/' /> : <HomePage />)} />
      <Route path="/signup" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
      <Route path="/signin" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
      < Route path="/message" render={() => (isLoggedIn ? <App1/> : <App1 />)} />
      <Route component={() => <h2>Page not found!</h2>} />
    </Switch>
    </LoginContext.Provider>
  
  </BrowserRouter>


};



export default App;
