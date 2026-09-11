import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header-container">
        <nav className="nav-container">
          <Link to="/" className="logo">SBA</Link>
          <NavLink to="/arena"> Battle Arena</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
