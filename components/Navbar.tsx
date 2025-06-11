'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Moon, Sun, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-white mr-3">
            <Link href="/">BlogNest</Link>
          </div>

          {/* Middle: Navigation links (hidden on mobile) */}
          <div className="hidden md:flex text-lg space-x-6 mr-3">
            <Link href="/articles" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white">Articles</Link>
            <Link href="/tutorial" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white">Tutorial</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white">About</Link>
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white">Dashboard</Link>
          </div>

          {/* Right: Search, toggle, auth */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-1 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none"
              />
              <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>

            {/* Dark mode toggle */}
            <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Sign Up / Login */}
            <Link href="/signup" className="px-3 py-1 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700">Sign Up</Link>
            <Link href="/login" className="px-3 py-1 rounded-md text-sm border border-blue-600 text-blue-600 hover:bg-blue-50">Login</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 dark:text-white">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/articles" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Articles</Link>
          <Link href="/tutorial" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Tutorial</Link>
          <Link href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link href="/dashboard" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Dashboard</Link>

          {/* Search */}
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none"
            />
            <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>

          {/* Toggle + Buttons */}
          <div className="flex items-center gap-3 mt-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link href="/signup" className="px-3 py-1 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700">Sign Up</Link>
            <Link href="/login" className="px-3 py-1 rounded-md text-sm border border-blue-600 text-blue-600 hover:bg-blue-50">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
