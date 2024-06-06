<template>
    <div class="charts-wrapper">
        <div class="chart-container">
            <apexchart
                type="donut"
                :options="chartOptions"
                :series="series"
            ></apexchart>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "CharPie",
    props: {
        series: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: "donut",
                },
                legend: {
                    position: "bottom",
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: "100%",
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
        };
    },
});
</script>
  
<style scoped>
.charts-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.chart-container {
    width: 100%;
    max-width: 500px;
    margin: 10px 0;
}

@media (max-width: 768px) {
    .chart-container {
        width: 100%;
    }
}
</style>