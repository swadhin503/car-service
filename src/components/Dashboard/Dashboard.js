import React from 'react';
import LineChartComp from './LineChartComp/LineChartComp';
import './Dashboard.css'
import PieChartComp from './PieChartComp/PieChartComp';

const Dashboard = () => {
    
    return (
        <div className="chart-container">
            <div className="line-chart">
                <h2>Month Wise Sell</h2>
                <LineChartComp></LineChartComp>
            </div>
            <div className="pie-chart">
                <h2>Investment vs Revenue</h2>
                <PieChartComp></PieChartComp>
            </div>
        </div>
    );
};

export default Dashboard;