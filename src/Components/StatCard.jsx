import React from 'react'

function StatCard({ Icon, title, subTitle, value, trend }) {

    const icons = {
        briefcase: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
        ),
        "trending-up": (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
        trendingup: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
        award: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="8" r="6" />
                <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
            </svg>
        ),
        percent: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="19" y1="5" x2="5" y2="19" />
                <circle cx="6.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
        )
    }

    return (
        <div className='rounded-2xl p-4 bg-white shadow-md shadow-black/30'>
            <div className='flex items-center justify-between gap-4'>
                <div className='w-10 h-10 border rounded-full bg-[#F1F0FE] text-[#4D37FF] flex items-center justify-center'>
                    {icons[Icon]}
                </div>
                {trend && (
                    <span className="text-xs font-semibold text-green-600">{trend}</span>
                )}
            </div>
            <div className='my-4'>
                <h3 className='text-2xl font-bold'>{value}</h3>
                <h4 className='text-gray-700 font-semibold text-sm'>{title}</h4>
                <span className='text-xs text-gray-600'>{subTitle}</span>
            </div>
        </div>
    )
}

export default StatCard