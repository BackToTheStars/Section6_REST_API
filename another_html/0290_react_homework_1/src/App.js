
import React from 'react';
//import Content1 from './content1.json';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer'

function App() {

  const topMenu = [
    'Learn',
    'Play',
    'Ideas',
    'Writings',
    'Topology',
    'Architecture',
    'Music', 'Paintings',
    'Dance'];

  const mainContent1 = 'Plato (/ˈpleɪtoʊ/ PLAY-toe; Greek: Πλάτων Plátōn, pronounced [plá.tɔːn] in Classical Attic; ' +
    '428/427 or 424/423 – 348/347 BC) was an Athenian philosopher during the Classical period in Ancient Greece, ' +
    'founder of the Platonist school of thought, and the Academy, the first institution of higher learning in the ' +
    'Western world.\n' +
    '\n' +
    'He is widely considered the pivotal figure in the history of Ancient Greek and Western philosophy, along with his ' +
    'teacher, Socrates, and his most famous student, Aristotle. Plato has also often been cited as one of the founders ' +
    'of Western religion and spirituality. The so-called Neoplatonism of philosophers like Plotinus and Porphyry ' +
    'influenced Saint Augustine and thus Christianity. Alfred North Whitehead once noted: "the safest general ' +
    'characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato."';

  const mainContent2 = 'Silicon Valley is a region in the southern part of the San Francisco Bay Area in Northern ' +
    'California that serves as a global center for high technology, innovation, venture capital, and social media. ' +
    'It corresponds roughly to the geographical Santa Clara Valley. San Jose is the Valley\'s largest city, the ' +
    'third-largest in California, and the tenth-largest in the United States; other major Silicon Valley cities include ' +
    'Sunnyvale, Santa Clara, Redwood City, Mountain View, Palo Alto, Menlo Park, and Cupertino. The San Jose' +
    ' Metropolitan Area has the third-highest GDP per capita in the world (after Zurich, Switzerland and Oslo, Norway), ' +
    'according to the Brookings Institution.';

  const footerMenu = ['About', 'Help', 'Participate', 'Discussions', 'Projects', 'Goals', 'Plan'];

  const clickedItemHeader = (data) => {
    console.log('Top click "' + data + '" propagated 2 levels up to App');
    console.log('-');
  }

  const clickedItemFooter = (data) => {
    console.log('"' + data + '" propagated to app.js');
    console.log('-');
  }

  return (
    <div class="container-fluid">
      <Header topMenu={topMenu} clickedItem2={clickedItemHeader}/>
      <hr/>
      <MainContent mainContent={mainContent1}/>
      <MainContent mainContent={mainContent2}/>
      <hr/>
      <Footer footerMenu={footerMenu} clickedItem4={clickedItemFooter}/>
    </div>
  );
}

export default App;
