<template>
    <div class="conteudo">
        <Carousel :dados="cards" />
        <modal />
        <modal-info />
        <div class="graficoTabela">
            <div class="graficos">
                <ChartPie :series="[15, 1, 10, 16]" />
                <ChartPie :series="[10, 3, 30, 12]" />
            </div>
            <div class="tabela">
                <Tabela v-if="larguraDaTela > 1000"></Tabela>
                <div v-else>
                    <tabela-mobile/>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import ChartPie from "./ChartPie.vue";
import Carousel from "./Carousel.vue";
import Tabela from "./Tabela.vue";
import TabelaMobile from "./TabelaMobile.vue";
import Modal from "./Modal.vue";
import ModalInfo from "./ModalInfo.vue";

export default defineComponent({
    components: {
        ChartPie,
        Carousel,
        Tabela,
        Modal,
        ModalInfo,
        TabelaMobile,
    },
    name: "Conteudo",
    data() {
        return {
            larguraDaTela: window.innerWidth,
            cards: [
                {
                    texto: "Total Tickets",
                    icone: "bi-ticket",
                    cor: "#017EB6",
                    fundoIcone: "#8edcff",
                    quantidade: "15",
                },
                {
                    texto: "Tickets Abertos",
                    icone: "bi-lock",
                    cor: "#1AA464",
                    fundoIcone: "#42E99B",
                    quantidade: "1",
                },
                {
                    texto: "Tickets Fechados",
                    icone: "bi-unlock",
                    cor: "#5C5C5C",
                    fundoIcone: "#BCBCBC",
                    quantidade: "10",
                },
                {
                    texto: "Tickets Atrasados",
                    icone: "bi-clock-history",
                    cor: "#FD6244",
                    fundoIcone: "#FDCDC4",
                    quantidade: "16",
                },
            ],
        };
    },
    mounted() {
        window.addEventListener("resize", this.atualizarLargura);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.atualizarLargura);
    },
    methods: {
        atualizarLargura() {
            this.larguraDaTela = window.innerWidth;
        },
    },
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

    .tabela  {
        width: 100%;
    }

    .tabela > div {
        height: 60vh;
        overflow: auto;
        background: white;
        border-radius: 10px;
    }
}
</style>
  