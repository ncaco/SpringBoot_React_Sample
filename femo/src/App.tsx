import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Header />
          <div className="main-content">
            <Sidebar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App 