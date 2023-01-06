import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sound from './sound/page';
import Main from './main/page';

const app = document.getElementById('app');

ReactDOM.render((
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sound" element={<Sound />} />
        </Routes>    
    </BrowserRouter>
), app);
