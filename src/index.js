import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { LinksProvider } from './providers/linksProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LinksProvider>
      <App />
    </LinksProvider>
  </React.StrictMode>
);
