import './App.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { BsChatSquareHeartFill, BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

export default function App() {
    return (
        <>
            {/* Navbar */}
            <div className="sticky top-0 z-50 navbar bg-base-200 px-2 sm:px-4 py-2 shadow-md flex items-center min-h-0">
                {/* Title */}
                <div className="flex items-center gap-2 text-xl font-bold">
                    <BsChatSquareHeartFill className="text-2xl" />
                    <span className="text-xl font-mono uppercase">
                        Hooked
                    </span>
                </div>

                {/* Actions */}
                <div className="ml-auto flex items-center gap-1 sm:gap-2">
                    {/* Theme Toggle */}
                    <label
                        className="toggle toggle-sm sm:toggle-md text-base-content ml-2"
                    >
                        <input type="checkbox" value="dark" className="theme-controller"/>
                        <BsFillSunFill />
                        <BsFillMoonFill className="-translate-y-[1px] translate-x-[.2px]" />
                    </label>
                </div>
            </div>
        </>
    )
}