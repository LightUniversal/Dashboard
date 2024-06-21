import React, {useRef, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto"

const ChartApp = ({ price, labels }) => {
  const chartInstance = useRef(null);
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartContainer && chartContainer.current && price && labels) {
      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Product Price',
            data: price,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 3,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Product Price',
              },
              min: 0,
            },
          },
        },
      });
    }

    return () => {
      // Clean up: ensure chart instance is destroyed when component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [price, labels]);

  return <canvas ref={chartContainer} className="mx-auto" style={{ maxWidth: '500px' }}></canvas>;
};

export default ChartApp;
