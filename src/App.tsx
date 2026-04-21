import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Why } from '@/pages/Why'
import { Admin } from '@/pages/Admin'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh flex-col bg-[#0A0A0A]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why" element={<Why />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
