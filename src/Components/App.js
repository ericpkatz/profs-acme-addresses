import React, { useEffect, useRef, useState } from 'react';
import Home from './Home';
import Login from './Login';
import Autocomplete from './Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken } from '../store';
import { Link, Routes, Route } from 'react-router-dom';


const App = ()=> {
  const { auth } = useSelector(state => state);
  const [place, setPlace ] = useState();
  const [map, setMap] = useState();
  const el = useRef();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=> {
    if(place){
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
      map.setCenter(place.geometry.location);
    }
  }, [place]);

  useEffect(()=> {
    console.log(el.current);
    const map = new google.maps.Map(el.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
    });
    setMap(map);
  }, [el]);

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
      <Autocomplete placeChanged={ place => setPlace(place)}/>
      <div ref={ el } style={{ height: '300px'}}/>
    </div>
  );
};

export default App;
