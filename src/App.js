import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { auth } from './firebase';
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import {Redirect} from 'react-router-dom';

function App() {
  const user = useSelector(selectUser);
  const role = "";
  const current_period_start = ""
  const current_period_end = ""
  // const subs = useSelector(selectSubscription);
  // console.log("User:",user)
  // console.log("Sub details",subs)
  const dispatch = useDispatch();

  // useEffect(() =>{
  //   if(!user?.role){
  //     <Redirect to='/profile'/>
  //   }
  // },[user?.role]);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log("logged in",userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
          role:role,
          current_period_start:current_period_start,
          current_period_end:current_period_end,
        }))
      }else{
        //logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Switch>
            <Route exact path='/profile'><ProfileScreen/></Route>
            <Route exact path="/"><HomeScreen/></Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
