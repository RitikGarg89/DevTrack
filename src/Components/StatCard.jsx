import React from 'react'

function StatCard({ Icon, title, subTitle, value, trend }) {
    return (
        <div className='w-72 border rounded-2xl p-4'>
            <div className='flex items-center gap-4'>
                <div className='w-10 h-10 border rounded-full bg-[#F1F0FE] text-[#4D37FF] flex items-center justify-center'>
                    {Icon}
                </div>
            </div>
            <div className='my-4'>
                <h3 className='text-2xl font-bold'>{value}</h3>
                <h4 className='text-gray-700 font-semibold text-sm'>{title}</h4>
                <span className='text-xs text-gray-600'>{subTitle}</span>
            </div>
            {trend && (
                { Icon }
            )}
        </div>
    )
}

export default StatCard