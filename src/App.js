import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from "./Main";

import './Styles/App.css';

function App() {
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('1c2c9496522c45818207e592c841a459')

  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
