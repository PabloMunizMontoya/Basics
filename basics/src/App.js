import React, {
  Fragment
} from 'react';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {

  //Obtain the date
  const date = new Date().getFullYear()

  return (
    <Fragment>
        <Header
          title = 'Virtual Shop'
        />

        <Footer
          date = {date}
        />
    </Fragment>
  );
}

export default App;
