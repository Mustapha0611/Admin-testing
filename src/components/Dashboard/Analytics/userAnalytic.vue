<template>
    <div class="p-4 bg-white rounded-lg h-auto">
      <h2 class="text-xl font-semibold mb-4">User Analytics</h2>
      <Chart type="line" :data="chartData" :options="chartOptions"  class="h-auto py-4"/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Chart from "primevue/chart";
  
  // Define chart data
  const chartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Personal Accounts',
        data: [120, 150, 180, 200, 250, 300, 280, 260, 290, 330, 340, 320],
        borderColor: '#536DFE',
        fill: false,
         radius: 0,
        tension: 0.4,
        pointStyle: 'rect',
      },
      {
        label: 'Business Accounts',
        data: [200, 180, 160, 150, 180, 220, 250, 240, 230, 200, 220, 210],
        borderColor: '#FF9800',
        fill: false,
         radius: 0,
        tension: 0.4,
        pointStyle: 'rect',
      },
      {
        label: 'Blocked Accounts',
        data: [80, 90, 100, 120, 140, 130, 110, 90, 100, 110, 90, 100],
        borderColor: '#F44336',
        fill: false,
         radius: 0,
        tension: 0.4,
        pointStyle: 'rect',
      }
    ]
  });
  
  // Define chart options
  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          labels: {
        generateLabels: (chart) => {
          const labels = chart.data.datasets.map((dataset, i) => ({
            text: dataset.label,
            fillStyle: dataset.borderColor,  // Use dataset borderColor as label background
            strokeStyle: dataset.borderColor,
            hidden: !chart.isDatasetVisible(i),
            lineCap: dataset.borderCapStyle,
            lineDash: dataset.borderDash,
            lineDashOffset: dataset.borderDashOffset,
            lineJoin: dataset.borderJoinStyle,
            pointStyle: 'rect',       // You can change this to circle, rect, or others
            datasetIndex: i
          }));
          return labels;
        }
      }
        }
      }
    },
    scales: {
      x: {
        grid:{
            display:false
        },
        // display:false,
        beginAtZero: true,
        max: 400,
      },
      y:{
        // grid:{
        // display:false}
      }
    }
  });
  </script>
  
  <style scoped>
  </style>
  