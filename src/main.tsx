import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArticlePageEditor from './components/ArticlePageEditor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/web___blogsite/editor" element={<ArticlePageEditor />} />
          <Route path="/web___blogsite/*" element={<App />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
