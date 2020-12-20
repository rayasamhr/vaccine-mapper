import React from 'react';
import FormPage from './FormPage';
import Firebase, { FirebaseContext } from '../Firebase'

const Home = () => (
  <React.Fragment>
    <FirebaseContext.Consumer>
      {firebase => <FormPage firebaseProp={firebase} />}
    </FirebaseContext.Consumer>
  </React.Fragment>
);

export default Home;