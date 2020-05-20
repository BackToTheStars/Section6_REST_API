
import React from 'react';
import Header from './Header';
import Footer from "./Footer";

function App() {

  const appVersion = '0.2.321';
  const menu = ['About', 'Products', 'Price'];

  const buttonFunc = () => {
    // это hook, отправленный в дочерний компонент
    console.log('pulled successfully')
  }
  let printText = (text) => {
    console.log(text);
  }
  let print = (object) => {
    console.log(object);
  }

  return (                       // version is props
    <div className="App">
      <Header version={appVersion}
              menu={menu}
              pushedButton1={buttonFunc}/>
      <h1>Here you are</h1>
      <p>Some paragraph goes here</p>
      <Footer v={appVersion}
              resultText={printText /* this is second hook */}
              objectPassed={print}
              />
    </div>
  );
}

export default App;
