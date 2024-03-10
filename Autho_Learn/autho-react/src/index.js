import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="adithtest.us.auth0.com"
    clientId="aPTPtwxKzEcmiuRyMqC130X9u6Gtdc4F"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "localhost:2000"
    }}

    
  >
    <App />
  </Auth0Provider>,
);


