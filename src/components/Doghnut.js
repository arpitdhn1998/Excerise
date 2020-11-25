import React from "react";
import { Doughnut } from "react-chartjs-2"
const DoughnutChart = () => {
    const data = {
        labels: ['HTML', 'CSS', 'Angular'],
        datasets: [{
            label: "Sales for 2020 in millions",
            data: [3, 2, 2],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'],
            borderColor: [
                'rgba(54, 162, 235, 0.2)'],
            pointBackgroundColor: 'rgba(54,162,235,0.2)',
            pointBorderColor: 'rgba(54,162,235,0.2)'
        }]
    }
    return (
        <div>

            <Doughnut data={data} />
        </div>
    );
}

export default DoughnutChart;