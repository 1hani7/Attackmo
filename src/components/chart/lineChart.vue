<template>
    <div id="chartWrap">
        <canvas id="chart" width="500" height="320"></canvas>
    </div>
</template>

<script>
import { Chart} from 'chart.js/auto';
import {onMounted, onBeforeMount, ref} from 'vue'
import { useRouter } from 'vue-router';
export default {
    name: 'lineChart',
    setup() {

        const isCharted = ref(false);
        const router = useRouter();

        onMounted(()=>{

            const makeLine = () => {
                const chartWrap = document.getElementById('chartWrap');
                const rect = chartWrap.getBoundingClientRect();
                if (isCharted.value == false && rect.top < window.innerHeight && rect.bottom >= 0) {
                    chartMaker();
                    isCharted.value = true;
                }
            }

            

            window.addEventListener('scroll', makeLine);

            const chartMaker = () => {
                const ctx = document.getElementById('chart');
                const label = ['09.03', '09.04', '09.05', '09.06', '09.07', '09.08', '09.09', '09.10', '09.11', '09.12',];
                const data = [80000, 21000, 20000, 19000, 15000, 55000, 45000, 11000, 10000, 16000];
                new Chart(ctx, {
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
                            fill: true,
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
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                });
            }
            router.beforeEach(()=>{
                window.removeEventListener('scroll', makeLine);
            })
        })

        

        return { isCharted };
    }
}
</script>

<style scoped>
#chartWrap {
    width: 100%; 
}

#chart {
    width: 450px; height:320px;
}
@media(max-width:490px){
    #chart{ height:250px; }
}
</style>