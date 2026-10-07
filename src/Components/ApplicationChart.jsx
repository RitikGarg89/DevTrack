import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function ApplicationChart() {
    const stages = [
        { name: "Applied", value: 42 },
        { name: "Screening", value: 18 },
        { name: "Interview", value: 8 },
        { name: "Offer", value: 2 },
        { name: "Rejected", value: 14 },
    ];

    const maxValue = 60;

    return (
        <>
            <h3>Application Overview</h3>
            <p>Application across stages</p>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={stages}
                        margin={{
                            top: 20,
                            right: 10,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            domain={[0, 60]}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip />

                        <Bar
                            dataKey="applications"
                            fill="#6366f1"
                            radius={[4, 4, 0, 0]}
                            barSize={48}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default ApplicationChart