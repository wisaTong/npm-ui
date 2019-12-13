import { h } from 'preact';

import Header from './components/Header';
import Loaf from './components/Loaf';
import './app.css';

const App = () => {
  return (
    <div class='app'>
      <Header />
      <div class='app-body'>
        <Loaf />
      </div>
    </div>
  );
};

export default App;
