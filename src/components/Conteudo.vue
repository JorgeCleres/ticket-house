<template>
    <div class="conteudo">

      <Carousel :dados="cards" />

      <div class="graficoTabela">
        <div class="graficos">
          <ChartPie :series="[1,3,3,5,8]" />
          <ChartPie :series="[10,3,30]" />
        </div>
        <div class="tabela"></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import ChartPie from "./ChartPie.vue";
  import Carousel from "./Carousel.vue";
  
  export default defineComponent({
    components: {
      ChartPie,
      Carousel,
    },
    name: "Conteudo",
    data() {
      return {
        cards: [
          { texto: "Total Tickets", icone: "bi-ticket", cor: "#017EB6", quantidade: "10" },
          { texto: "Total Tickets", icone: "bi-ticket", cor: "#017EB6", quantidade: "10" },
          { texto: "Total Tickets", icone: "bi-ticket", cor: "#017EB6", quantidade: "10" },
          { texto: "Total Tickets", icone: "bi-ticket", cor: "#017EB6", quantidade: "10" },
        ]
      }
    }
  });
  </script>
  
  <style scoped>
  .conteudo {
    width: 100%;
    padding: 15px 10px;
    background: rgb(240, 240, 240);
  }
  
  .graficoTabela {
    height: 84%;
    display: flex;
    flex-direction: row;
  }
  
  .graficos {
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .tabela {
    width: 75%;
  }
  
  @media (max-width: 480px) {
    .graficoTabela {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  
    .graficos {
      width: 100%;
    }

    .conteudo {
        width: 100%;
        padding: 15px 0px;
        background: rgb(240, 240, 240);
    }
  }
  </style>
  