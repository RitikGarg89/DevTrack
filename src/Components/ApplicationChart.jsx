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
    const data = [
        { name: "Applied", value: 42 },
        { name: "Screening", value: 18 },
        { name: "Interview", value: 8 },
        { name: "Offer", value: 2 },
        { name: "Rejected", value: 14 },
    ];

    return (
        <>
            <h3 className='text-gray-700 font-semibold text-xl mb-2'>Application Overview</h3>
            <p className='text-gray-600 font-semibold mb-6'>Application across stages</p>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #e2e8f0",
                                borderRadius: "8px",
                                padding: "10px 14px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                            }}
                        />

                        <Bar
                            dataKey="value"
                            fill="#6366f1"
                        />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default ApplicationChart