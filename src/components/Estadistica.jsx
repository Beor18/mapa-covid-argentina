import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import data from '../data/data.json'

console.log(data)
const chartConfig = {
    type: "line",
    data: {
        labels: data.datos.map(e => e.fecha),
        datasets: [
            {
                label: "Fallecidos",
                data: data.datos.map(e => e.fallecidos),
                borderColor: [
                    "rgba(255, 99, 132, 1)"
                ],
                borderWidth: 1
            },
            {
                label: "Confirmados",
                data: data.datos.map(e => e.positivos),
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
