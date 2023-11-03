import React from "react";

function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white py-2 z-50 flex items-center justify-center">
      <a href="/">
        <img src="/logo.png" alt="Logo" className="w-15 h-15 mr-2" />
      </a>
    </header>
  );
}

export default Header;
