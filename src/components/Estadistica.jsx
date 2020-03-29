import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";


const chartConfig = {
    type: "line",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "siete"],
        datasets: [
            {
                label: "Fallecidos",
                data: [1, 20, 25, 50, 130, 230, 420],
                borderColor: [
                    "rgba(255, 99, 132, 1)"
                ],
                borderWidth: 1
            },
            {
                label: "Confirmados",
                data: [3, 35, 150, 200, 500, 540, 745],
                borderColor: [
                    "rgb(112, 168, 0)"
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
};

const Chart = () => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    const updateDataset = (datasetIndex, newData) => {
        chartInstance.data.datasets[datasetIndex].data = newData;
        chartInstance.update();
    };

    return (
        <canvas ref={chartContainer} />
    );
};

export default Chart;
