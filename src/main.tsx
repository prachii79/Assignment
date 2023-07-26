import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstPage from "./components/FirstPage"
import SecondPage from './components/SecondPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)