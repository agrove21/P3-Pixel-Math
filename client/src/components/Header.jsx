
import { Link } from 'react-router-dom';

function Header({ onLogout }) {
  return (
    <header className="p-4 text-black">
      <nav className="container mx-auto flex justify-end items-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-500 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="text-black hover:text-gray-500 font-medium"
            >
              Library
            </Link>
          </li>
          <li>
            <button
              onClick={onLogout} // Pass a valid function here
              className="text-black hover:text-gray-500 font-medium"
            >
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header