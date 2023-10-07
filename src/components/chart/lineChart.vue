<template>
    <div id="chartWrap">
        <canvas id="chart" width="500" height="220"></canvas>
    </div>
</template>

<script>
import { Chart } from 'chart.js/auto';

export default {
    name: 'lineChart',
    setup() {

        window.addEventListener('scroll', function(){
            const chartWrap = document.getElementById('chartWrap');
            const rect = chartWrap.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0){
                chartMaker();
            }
        })

        const chartMaker = () => {
            const ctx = document.getElementById('chart');
            const label = ['09.03', '09.04', '09.05','09.06', '09.07', '09.08', '09.09', '09.10', '09.11', '09.12', ];
            const data = [80000, 21000, 20000, 19000, 15000, 55000, 45000, 11000, 10000, 16000];
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: label,
                    datasets: [{
                        label: label,
                        data: data,
                        borderWidth: 3,
                        borderColor: '#F9C041',
                        pointBorderWidth: 0,
                        pointStyle: false,
                        fill:true,
                        backgroundColor: '#F9C04180'
                    }]
                },
                options: {
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuad'
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins:{
                        legend:{
                            display:false
                        }
                    }
                }
            });
        }

        return {  };
    }
}
</script>

<style scoped>
#chartWrap {
    width: 100%; 
}

#chart {
    width: 450px; height:220px;
}
</style>