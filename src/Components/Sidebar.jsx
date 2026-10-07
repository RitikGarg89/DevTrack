import React from 'react'

function Sidebar() {
    return (
        <aside className='w-75 border-r px-5 py-3 h-lvh'>
            <nav className='flex flex-col items-center'>
                <a className='w-full flex h-[74px] items-center px-4' href="/">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="3"
                            y="3"
                            width="7"
                            height="7"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <rect
                            x="14"
                            y="3"
                            width="7"
                            height="7"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <rect
                            x="3"
                            y="14"
                            width="7"
                            height="7"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <rect
                            x="14"
                            y="14"
                            width="7"
                            height="7"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h2>Dashboard</h2>
                </a>
                <a className='w-full flex h-[74px] items-center px-4' href="/">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="3"
                            y="7"
                            width="18"
                            height="14"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <path
                            d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <path
                            d="M3 12H21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />

                        <path
                            d="M10 12V14H14V12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h2>Applications</h2>
                </a>
                <a className='w-full flex h-[74px] items-center px-4' href="/">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V21L12 17.5L6 21V4Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h2>Saved Jobs</h2>
                </a>
                <a className='w-full flex h-[74px] items-center px-4' href="">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 20V14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />

                        <path
                            d="M12 20V5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />

                        <path
                            d="M19 20V9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                    <h2>Analytics</h2>
                </a>
                <a className='w-full flex h-[74px] items-center px-4' href="/">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                        />

                        <path
                            d="M19.4 15C19.5 14.7 19.7 14.4 19.8 14.1L21 13L19.5 10.5L17.9 10.9C17.5 10.5 17.1 10.2 16.6 10L16.4 8.3L13.5 7.5L12.5 8.9C12.3 8.9 12.1 8.9 12 8.9C11.8 8.9 11.6 8.9 11.4 8.9L10.4 7.5L7.5 8.3L7.3 10C6.8 10.2 6.4 10.5 6 10.9L4.4 10.5L3 13L4.2 14.1C4.3 14.4 4.5 14.7 4.6 15L4.2 16.6L6.7 18L8 17C8.4 17.2 8.8 17.4 9.3 17.5L9.8 19.2H14.2L14.7 17.5C15.2 17.4 15.6 17.2 16 17L17.3 18L19.8 16.6L19.4 15Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h2>Settings</h2>
                </a>
            </nav>
        </aside>
    )
}

export default Sidebar