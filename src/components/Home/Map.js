import React from 'react';
import MapPage from './MapPage';
import Firebase, { FirebaseContext } from '../Firebase'
 
const Map = () => (
    <React.Fragment>
    <FirebaseContext.Consumer>
      {firebase => <MapPage firebaseProp={firebase} />}
    </FirebaseContext.Consumer>
  </React.Fragment>
);
 
export default Map;