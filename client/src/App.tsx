import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form } from './form/Form';
import FirstPage from './FirstPage/';
import Portfolio from './Portfolio';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/main' element={<Main />}>
          <Route path='' element={<Dashboard />} />
          <Route path='portfolio' element={<Portfolio />} />
          {/* <Route path='' element={<WatchList />} /> */}
        </Route>
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

