
import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer'

function App() {

  const topMenu = ['Learn', 'Play', 'Ideas', 'Writings', 'Topology', 'Architecture', 'Music', 'Paintings', 'Dance'];
  const mainContent = 'Влади́мир Ива́нович Верна́дский (28 февраля [12 марта] 1863, Санкт-Петербург — 6 января 1945, Москва) — русский, украинский и советский учёный-естествоиспытатель, мыслитель и общественный деятель. Академик Императорской Санкт-Петербургской академии наук (1912); один из основателей и первый президент Украинской академии наук (1918—1921). Создатель научных школ и науки биогеохимии. Один из представителей русского космизма. Лауреат Сталинской премии I степени (1943).\n' +
    '\n' +
    'В круг его научных интересов входили: минералогия, кристаллография, геохимия, геология, почвоведение, радиогеология, биология, палеонтология, биогеохимия, метеоритика, философия и история науки. Кроме того, занимался организаторской и общественной деятельностью.';
  const footerMenu = ['About', 'Help', 'Participate', 'Discussions', 'Projects', 'Goals', 'Plan'];

  return (
    <div class="container-fluid">
      <Header topMenu={topMenu}/>
      <hr/>
      <MainContent mainContent={mainContent}/>
      <hr/>
      <Footer footerMenu={footerMenu}/>
    </div>
  );
}

export default App;
