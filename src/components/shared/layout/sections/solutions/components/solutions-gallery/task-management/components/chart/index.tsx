import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

ChartJS.defaults.elements.bar.borderRadius = 20;

interface BarChartProps {
  className?: string;
}

function BarChart({ className }: BarChartProps) {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours Worked",
        data: [8, 7, 8, 6, 9, 4, 6],
        backgroundColor: "#1B5BFF",
        borderRadius: 20,
      },
      {
        label: "Break Time",
        data: [3, 2, 2.5, 1, 3, 2, 2],
        backgroundColor: "#00E632",
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Work vs Break Hours",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} className={`${className} w-full h-full p-2 border rounded-lg`} />;
}

export default BarChart;