import { Twitter, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";

export default function Navbar() {

  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl">
            <Twitter className="w-5 h-5 text-white" />
          </div>

          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            TweetCraft AI
          </span>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Subtitle */}
          <span className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 transition">
            Generate on-brand tweets instantly
          </span>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
          </button>

        </div>

      </div>

    </nav>
  );
}