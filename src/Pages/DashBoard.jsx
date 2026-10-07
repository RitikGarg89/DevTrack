import React from 'react'
import StatCard from '../Components/StatCard'

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
            {stats.map((stat, idx) => {
                return (
                    <StatCard
                        key={idx}
                        Icon={stat.icon}
                        title={stat.title}
                        subTitle={stat.subTitle}
                        value={stat.value}
                        trend={stat.trend}
                    />
                )
            })}
        </>
    )
}

export default DashBoard