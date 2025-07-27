import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import SignUpForm from './components/SignUpForm'
import UserCard from './components/UserCard'

function App() {
  const [activePage, setActivePage] = useState('home')

  // sample user data for demonstration
  const demoUsers = [
    { name: 'Alex Johnson', email: 'alex.johnson@example.com' },
    { name: 'Maria Garcia', email: 'maria.garcia@example.com' },
    { name: 'David Chen', email: 'david.chen@example.com' },
    { name: 'Sarah Williams', email: 'sarah.williams@example.com' }
  ]

  // handle page navigation
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  // render different page content based on active page
  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <div className="home-section">
            <h1>Welcome to TechFlow</h1>
            <p>Building amazing web experiences with modern technologies</p>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>⚡ Lightning Fast</h3>
                <p>Built with React and Vite for incredible performance</p>
              </div>
              <div className="feature-card">
                <h3>📱 Mobile First</h3>
                <p>Responsive design that works on every device</p>
              </div>
              <div className="feature-card">
                <h3>🎨 Beautiful UI</h3>
                <p>Clean, modern interfaces that users love</p>
              </div>
            </div>
          </div>
        )
      case 'about':
        return (
          <div className="about-section">
            <h1>About TechFlow</h1>
            <p>We're passionate about creating exceptional digital experiences that make a difference.</p>
            <div className="about-content">
              <div className="about-text">
                <h3>Our Story</h3>
                <p>Started as a small team of developers who believed in the power of clean, efficient code and beautiful user interfaces.</p>
                
                <h3>What We Do</h3>
                <ul>
                  <li>Build responsive web applications</li>
                  <li>Create intuitive user experiences</li>
                  <li>Optimize for performance and accessibility</li>
                  <li>Stay up-to-date with latest technologies</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="contact-section">
            <h1>Get In Touch</h1>
            <p>Ready to start your next project? Let's talk about how we can help.</p>
            <div className="contact-info">
              <div className="contact-card">
                <h3>📧 Email Us</h3>
                <p>hello@techflow.com</p>
              </div>
              <div className="contact-card">
                <h3>📞 Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-card">
                <h3>📍 Visit Us</h3>
                <p>123 Innovation Drive, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        )
      case 'signup':
        return <SignUpForm />
      case 'users':
        return (
          <div className="users-section">
            <h1>Our Team</h1>
            <p>Meet the amazing people behind TechFlow</p>
            <div className="users-grid">
              {demoUsers.map((user, index) => (
                <UserCard 
                  key={index}
                  name={user.name}
                  email={user.email}
                />
              ))}
            </div>
          </div>
        )
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="app">
      <Navigation onPageChange={handlePageChange} />
      <main className="main-content">
        <div className="content-wrapper">
          {renderPageContent()}
        </div>
      </main>
      
      {/* page navigation for demo */}
      <div className="demo-nav">
        <h3>Page Navigation</h3>
        <div className="demo-buttons">
          <button onClick={() => setActivePage('home')}>Home</button>
          <button onClick={() => setActivePage('about')}>About</button>
          <button onClick={() => setActivePage('contact')}>Contact</button>
          <button onClick={() => setActivePage('signup')}>Sign Up</button>
          <button onClick={() => setActivePage('users')}>Team</button>
        </div>
      </div>
    </div>
  )
}

export default App
