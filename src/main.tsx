import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { AppProviders } from './providers/app-providers.tsx'

// document.documentElement.classList.add('sidebar-dark')
createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App />
  </AppProviders>,
)
