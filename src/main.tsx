import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'
import './index.css'
import { GuessedLettersProvider } from './context/guessedLettersContext.tsx'

const CLIENT_ID = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID || '';

console.log(CLIENT_ID);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GuessedLettersProvider>
          <App />
        </GuessedLettersProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
