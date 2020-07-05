import React, { Component } from 'react';
import {BackToTop} from './layout/back-to-top'
import {Header} from './layout/header'
import {Footer} from './layout/footer'
import {Main} from './pages/Test'


class App extends Component {
  render() {

    return(
      <div className="darkmode">
      <Header/>
      <Main/>
      <Footer/>
      <BackToTop/>
      </div>
    );
  }
}


export default App;
