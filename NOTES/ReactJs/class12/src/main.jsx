import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// types of routers---

// BrowserRouter:
//   - uses historyAPI
//   -URL clean rehta h
//   - used in most of the modern apps
//   -needs server configuration(drawback is that we have to send the indexedDB.html file only while connecting with the backend)
//   -good SEO

// HashRouter:
//   -contains # in between of the URL
//   -mostly used older browsers
//   - no SEO

// MemoryRouter:
//   -used when working with ReactNative

// StaticRouter:
//   -used in server side rendering(SSR)
