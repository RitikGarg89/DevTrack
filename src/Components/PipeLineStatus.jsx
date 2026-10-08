import React from "react";

function PipelineStatus() {
    const pipeline = [
        {
            name: "Applied",
            value: 42,
            color: "bg-indigo-500",
            width: "100%",
        },
        {
            name: "Screening",
            value: 18,
            color: "bg-orange-400",
            width: "43%",
        },
        {
            name: "Interview",
            value: 8,
            color: "bg-violet-500",
            width: "19%",
        },
        {
            name: "Offer",
            value: 2,
            color: "bg-emerald-500",
            width: "5%",
        },
        {
            name: "Rejected",
            value: 14,
            color: "bg-red-500",
            width: "33%",
        },
    ];

    return (
        <>
            <h2 className="text-base font-medium text-slate-900">
                Pipeline Status
            </h2>

            <div className="mt-5 space-y-3">
                {pipeline.map((item) => (
                    <div key={item.name}>

                        {/* Label + value */}
                        <div className="mb-1.5 flex items-center justify-between">
                            <span className="text-sm text-slate-700">
                                {item.name}
                            </span>

                            <span className="text-sm text-slate-700">
                                {item.value}
                            </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-1.5 w-full rounded-full bg-slate-100">
                            <div
                                className={`h-full rounded-full ${item.color}`}
                                style={{ width: item.width }}
                            />
                        </div>

                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="my-5 border-t border-slate-200" />

            {/* Response rate */}
            <div>
                <p className="text-sm text-slate-500">
                    Response rate
                </p>

                <p className="mt-1 text-2xl font-medium text-indigo-600">
                    38%
                </p>
            </div>
        </>
    );
}

export default PipelineStatus;