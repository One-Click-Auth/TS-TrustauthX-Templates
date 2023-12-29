import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <aside id="sidebar">
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
              <Link to="/some-protected-router">A Protected Route</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section>
        <h1>Welcome!</h1>
        <p>This is the home page</p>
      </section>
      <div id="detail"></div>
    </>
  );
}

export default App;
