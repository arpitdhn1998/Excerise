import React from 'react';
import { Line } from "react-chartjs-2"

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: "Sales for 2020 in millions",
        data: [3, 2, 2, 1, 5, 6],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)'],
        borderColor: [
            'rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54,162,235,0.2)',
        pointBorderColor: 'rgba(54,162,235,0.2)'
    }]
}
const LineCharts = () => {
    return (
        <div>

            <Line data={data} />
        </div>
    );
}

export default LineCharts;