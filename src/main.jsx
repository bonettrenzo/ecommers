import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProviders } from './context/FiltersContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <FiltersProviders>
      <App />
    </FiltersProviders>
)
