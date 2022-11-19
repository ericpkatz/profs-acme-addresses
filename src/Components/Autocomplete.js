import React, { useRef, useEffect } from 'react';

const Autocomplete = ({ placeChanged })=> {
  const el = useRef();
  useEffect(()=> {
    const autocomplete = new google.maps.places.Autocomplete(el.current);
    autocomplete.addListener('place_changed', ()=> {
      placeChanged(autocomplete.getPlace());
    });
  }, [el]);

  return (
    <input ref={ el } style={{ height: '2rem', width: '100%'}}/>
  );
}

export default Autocomplete;
