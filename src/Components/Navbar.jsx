import React, { useState } from 'react'

function Navbar() {

    const [search, setSearch] = useState('');
    const [logedIn, setLogedIn] = useState(false);

    return (
        <nav className="flex items-center justify-between  shadow-[0_4px_10px_-4px_rgba(0,0,0,0.1)] px-5 py-3 border-b border-gray-400 bg-white">
            {/* Search */}
            <div
                className='flex h-10 w-[320px] items-center gap-3 rounded-lg border px-3 focus-within:border-gray-500'
            >
                <div className='w-[20px] h-[20px]'>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <input
                    className='flex-1 outline-none'
                    type="Search"
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {/* Right side */}
            <div className="flex items-center gap-4">
                <div>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 8C18 5.79086 16.2091 4 14 4H10C7.79086 4 6 5.79086 6 8V11.5C6 13.16 5.4 14.76 4.31 16L3 17.5H21L19.69 16C18.6 14.76 18 13.16 18 11.5V8Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 21H15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                {logedIn ? (
                    <div className='flex items-center w-fit mx-2 px-1 rounded-xl gap-2 border border-gray-300'>
                        <img className='rounded-full' src="https://placehold.co/40x40" width={40} height={40} alt="profilepic" />
                        <h2 className='text-gray-700 font-semibold'>Username</h2>
                    </div>
                ) : (
                    <button className='flex items-center justify-center w-fit mx-2 px-6 py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors duration-150'>
                        <span>Login</span>
                    </button>
                )}
            </div>
        </nav >
    );
}

export default Navbar;