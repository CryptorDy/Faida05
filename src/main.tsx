import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Handle direct URL access
const handleDirectNavigation = () => {
  // Check if there's a stored redirect path
  const redirectPath = sessionStorage.getItem('redirectPath');
  if (redirectPath) {
    // Clear the stored path
    sessionStorage.removeItem('redirectPath');
    // No need to manually redirect - React Router will handle it
  }
};

// Call the function before rendering
handleDirectNavigation();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
