import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Pages/AuthProvider";
import { BsSun, BsMoon, BsList, BsX } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      setUserDropdown(false);
      setMenuOpen(false);
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  const menuItems = (
    <>
      <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
      <li><NavLink to="/add-car" onClick={() => setMenuOpen(false)}>Add Car</NavLink></li>
      <li><NavLink to="/my-listings" onClick={() => setMenuOpen(false)}>My Listings</NavLink></li>
      <li><NavLink to="/my-bookings" onClick={() => setMenuOpen(false)}>My Bookings</NavLink></li>
      <li><NavLink to="/browse-cars" onClick={() => setMenuOpen(false)}>Browse Cars</NavLink></li>

      {!user && (
        <>
          <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
          <li><NavLink to="/signup" onClick={() => setMenuOpen(false)}>SignUp</NavLink></li>
        </>
      )}

      {user && (
        <li className="relative">
          <img
            src={user.photoURL || "/default-avatar.png"}
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-400"
            onClick={() => setUserDropdown(!userDropdown)}
            alt="User Avatar"
          />
          {userDropdown && (
            <div className="absolute right-0 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-4 mt-2 w-48 rounded shadow transition-colors duration-300">
              <p className="font-semibold">{user.displayName || "User"}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{user.email}</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </li>
      )}

  
      <li className="md:hidden mt-2">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 rounded-full"
        >
          {dark ? <BsSun /> : <BsMoon />}
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-xl sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        
        <span className="text-3xl font-extrabold text-yellow-500 dark:text-yellow-400">
          Rent<span className="text-gray-900 dark:text-white">Car</span>
        </span>

      
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200 items-center">
          {menuItems}
          <li>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-400 dark:hover:bg-yellow-500 transition-colors duration-300"
            >
              {dark ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>
          </li>
        </ul>

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200 text-2xl"
        >
          {menuOpen ? <BsX /> : <BsList />}
        </button>
      </div>

     
      {menuOpen && (
        <ul className="md:hidden bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col p-4 space-y-2 transition-colors duration-300">
          {menuItems}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
