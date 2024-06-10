import React from 'react';
import App from './app';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
console.log('3123131')
root.render(<App />);
