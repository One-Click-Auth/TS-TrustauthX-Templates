import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { LoginStatus } from './components/login-status';

function App() {
  return (
    <main id="main" className="grid-container">
      <aside id="sidebar" className="grid-item">
        <h1>Example ReactJs Starter</h1>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/some-protected-route">A Protected Route</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="grid-item">
        <h1>Welcome!</h1>
        <p>This is the home page</p>
        <LoginStatus />
        <div id="detail">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default App;
