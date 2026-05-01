import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Why } from '@/pages/Why'
import { ToolDetail } from '@/pages/ToolDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh flex-col bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why" element={<Why />} />
          <Route path="/tools/:slug" element={<ToolDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
