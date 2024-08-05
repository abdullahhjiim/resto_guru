import React from "react";

export default function NavBar() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          {/* <a href="/restu_guru.svg">MyLogo</a> */}
          <img src="/restu_guru.svg" alt="" className="h-[35px]" />
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Reservations
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                Queue Management
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 px-3 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded"
              >
                Book a demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
