import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { NewsProvider } from "./Contexts/NewsContext";

import Main from "./Main";

import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <NewsProvider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </NewsProvider>
      
    </div>
  );
}

export default App;
