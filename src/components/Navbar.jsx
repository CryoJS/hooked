import { Link, useLocation } from 'react-router-dom'
import { GiFishingHook } from 'react-icons/gi'

export default function Navbar() {
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <div className="sticky top-0 z-50 navbar bg-base-200 px-2 sm:px-4 py-2 shadow-md flex items-center min-h-0 justify-between">
            {/* Title */}
            <div className="flex items-center gap-2 font-bold flex-shrink-0">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <GiFishingHook className="text-2xl font-bold my-[-10px]" />
                    <span className="text-2xl font-mono uppercase my-[-10px]">
                Hooked
            </span>
                </Link>
            </div>

            {/* Nav Links */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex">
                <div className="flex items-center gap-8 font-mono font-bold uppercase tracking-tight">
                    <Link to="/" className={`px-2 py-1 ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary/80'} transition-colors`}>
                        Home
                    </Link>
                    <Link to="/game" className={`px-2 py-1 ${isActive('/game') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary/80'} transition-colors`}>
                        Play
                    </Link>
                    <Link to="/about" className={`px-2 py-1 ${isActive('/about') ? 'text-primary border-b-2 border-primary' : 'hover:text-primary/80'} transition-colors`}>
                        About
                    </Link>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 flex-shrink-0 ml-auto sm:ml-0">
                {/* Theme Toggle */}
                <label className="toggle toggle-sm sm:toggle-md text-base-content">
                    <input type="checkbox" value="dark" className="theme-controller" />
                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                </label>
            </div>
        </div>
    )
}