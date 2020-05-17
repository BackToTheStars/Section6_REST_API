
import React from 'react';
import Header from './Header';
import Footer from "./Footer";

function App() {

  const appVersion = '0.2.321';
  const menu = ['About', 'Products', 'Price'];
  return (                       // version is props
    <div className="App">
      <Header version={appVersion} menu={menu}/>
      <h1>Here you are</h1>
      <p>Some paragraph goes here</p>
      <Footer v={appVersion}/>
      <Footer />
    </div>
  );
}

export default App;
