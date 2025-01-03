/**
 * App.jsx - Main application component
 * Serves as the root component of the application
 * Features:
 * - Client-side routing with React Router
 * - Theme management with ThemeProvider
 * - Responsive layout with dark mode support
 * - Smooth transitions between themes
 */

import { BrowserRouter as Router } from 'react-router-dom'
// Import all major components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
// Theme context provider for dark/light mode
import { ThemeProvider } from './context/ThemeContext';

/**
 * App Component
 * Main component that structures the entire application
 * Layout:
 * - Navigation bar at the top
 * - Main content sections in sequence
 * - Footer at the bottom
 * All wrapped in theme provider and router
 */
function App() {
  return (
    <Router>
      <ThemeProvider>
        {/* Main container with theme transition support */}
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Navigation */}
          <Navbar />
          {/* Main content area */}
          <main>
            {/* Sequential sections of the portfolio */}
            <Hero />
            <About />
            <Projects />
            <Blog />
            <Contact />
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
