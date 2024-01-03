import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Views/Home'
import Contacts from './Views/Contacts'
import NotFound from './Views/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= '/' element= {<Home />} />
      <Route path= '/Contacts' element= {<Contacts />} />
      <Route path= '/NotFound' element= {<NotFound />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

