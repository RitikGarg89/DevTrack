import React from 'react'

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
        <div className="bg-transparent flex w-full items-center ">

            {/* Y-axis */}
            <div className="mb-2 gap-4 flex flex-col justify-between text-xs text-slate-400">
                <span>60</span>
                <span>45</span>
                <span>30</span>
                <span>15</span>
                <span>0</span>
            </div>

            {/* Chart */}
            <div className="flex h-48 items-end justify-around border-b border-slate-200">

                {stages.map((stage) => (
                    <div
                        key={stage.name}
                        className="flex h-full flex-col items-center justify-end"
                    >

                        {/* Bar */}
                        <div
                            className="w-12 rounded-t bg-indigo-500"
                            style={{
                                height: `${(stage.value / maxValue) * 100}%`,
                            }}
                        />

                        {/* Label */}
                        <span className="mt-2 text-xs text-slate-500">
                            {stage.name}
                        </span>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default ApplicationChart