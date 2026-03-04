import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'

// document.documentElement.classList.add('sidebar-dark')
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>,
)
