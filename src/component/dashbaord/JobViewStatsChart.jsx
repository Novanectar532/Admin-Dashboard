import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { date: "04 Apr", views: 450 },
    { date: "05 Apr", views: 100 },
    { date: "06 Apr", views: 550 },
    { date: "07 Apr", views: 300 },
    { date: "08 Apr", views: 470 },
    { date: "09 Apr", views: 470 },
    { date: "10 Apr", views: 470 },

];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 rounded shadow text-sm border">
                <p className="text-gray-600">{`${payload[0].value} Job Viewed`}</p>
                <p className="text-xs text-gray-400">{label}</p>
            </div>
        );
    }

    return null;
};

const JobViewStatsChart = () => {
    return (
        <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Job Listing View stats</h2>
            <ResponsiveContainer width="100%" height={370}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" />
                    <YAxis
                        domain={[0, 1500]}
                        ticks={[0, 100, 250, 500, 750, 1000, 1250, 1500]}
                    />          <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="views"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default JobViewStatsChart;
