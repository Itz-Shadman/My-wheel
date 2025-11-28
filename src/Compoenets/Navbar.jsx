import React, { useContext, useState } from "react";
import { NavLink } from "react-router"; 
import { AuthContext } from "../Pages/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); 
  const [open, setOpen] = useState(false);   // Profile dropdown
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  const handleLogout = async () => {
    try {
      await logOut();
      setOpen(false);
      setMenuOpen(false);
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <nav className="bg-gray-800 shadow-xl sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">

        {/* Logo */}
        <span className="text-3xl font-extrabold text-yellow-500">
          Rent<span className="text-white">Car</span>
        </span>

        {/* ---------- Mobile Toggle Button ---------- */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* ---------- Desktop Menu ---------- */}
        <ul className="hidden md:flex space-x-6 text-white items-center">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/add-car">Add Car</NavLink></li>
          <li><NavLink to="/my-listings">My Listings</NavLink></li>
          <li><NavLink to="/my-bookings">My Bookings</NavLink></li>
          <li><NavLink to="/browse-cars">Browse Cars</NavLink></li>

          {!user && (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/signup">SignUp</NavLink></li>
            </>
          )}

          {user && (
            <div className="relative">
              <img
                src={user.photoURL || "/default-avatar.png"}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-400"
                onClick={() => setOpen(!open)}
                alt="User Avatar"
              />

              {open && (
                <div className="absolute right-0 bg-gray-900 text-white p-4 mt-2 w-48 rounded shadow">
                  <p className="font-semibold">{user.displayName || "User"}</p>
                  <p className="text-sm text-gray-400 mb-2">{user.email}</p>

                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </ul>
      </div>

      {/* ---------- Mobile Menu (Dropdown) ---------- */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white p-5 space-y-4">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink><br />
          <NavLink to="/add-car" onClick={() => setMenuOpen(false)}>Add Car</NavLink><br />
          <NavLink to="/my-listings" onClick={() => setMenuOpen(false)}>My Listings</NavLink><br />
          <NavLink to="/my-bookings" onClick={() => setMenuOpen(false)}>My Bookings</NavLink><br />
          <NavLink to="/browse-cars" onClick={() => setMenuOpen(false)}>Browse Cars</NavLink><br />

          {!user && (
            <>
              <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink><br />
              <NavLink to="/signup" onClick={() => setMenuOpen(false)}>SignUp</NavLink>
            </>
          )}

          {user && (
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-bold">{user.displayName}</p>
              <p className="text-sm text-gray-300 mb-3">{user.email}</p>

              <button
                onClick={handleLogout}
                className="bg-red-500 w-full py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
