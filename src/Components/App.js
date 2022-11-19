import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Autocomplete from './Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken } from '../store';
import { Link, Routes, Route } from 'react-router-dom';


const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  return (
    <div>
      <h1>FS App Template</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
            </nav>
          </div>
        )
      }
      <Autocomplete placeChanged={ place => console.log(place)}/>
      <Autocomplete placeChanged={ place => console.log(place)}/>
      <Autocomplete placeChanged={ place => console.log(place)}/>
    </div>
  );
};

export default App;
