import React from 'react'
import StatCard from '../Components/StatCard'
import ApplicationChart from '../Components/ApplicationChart';
import PipelineStatus from '../Components/PipeLineStatus';

function DashBoard() {
    const stats = [
        {
            title: "Total Applications",
            value: 42,
            subtitle: "+12 this month",
            trend: "Up",
            icon: "briefcase"
        },
        {
            title: "Interviews",
            value: 8,
            subtitle: "+3 this month",
            trend: "Up",
            icon: "trending-up"
        },
        {
            title: "Offers",
            value: 2,
            subtitle: "All-time",
            trend: null,
            icon: "award"
        },
        {
            title: "Response Rate",
            value: "38%",
            subtitle: "+4% vs last month",
            trend: "Up",
            icon: "percent"
        }
    ];


    return (
        <>
            <div className='flex flex-col justify-between items-center'>
                <div className='flex justify-between items-center w-full mx-2 my-6'>
                    <div>
                        <h1 className='text-4xl font-medium text-gray-700'>Dashboard</h1>
                        <p className='text-gray-700 font-semibold'>Keep up the momentum</p>
                    </div>
                    <button className='flex items-center justify-center w-61 gap-2 h-[48px] rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors duration-150 '>
                        <div className='w-5 h-5'>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 4V16M4 10H16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <span>Application</span>
                    </button>

                </div>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4'>
                {stats.map((stat, idx) => {
                    return (
                        <StatCard
                            key={idx}
                            Icon={stat.icon}
                            title={stat.title}
                            subTitle={stat.subtitle}
                            value={stat.value}
                            trend={stat.trend}
                        />
                    )
                })}
            </div>
            <div className='flex my-8 justify-center items-stretch gap-10'>
                <div className='p-4 bg-white w-full rounded-2xl shadow-lg flex-2 shadow-black/30'>
                    <ApplicationChart />
                </div>
                <div className='p-4 bg-white w-full rounded-2xl shadow-lg flex-1 shadow-black/30'>
                    <PipelineStatus />
                </div>
            </div>
        </>
    )
}

export default DashBoard