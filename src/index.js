import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import Page from './components/page/page.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<Page />);
