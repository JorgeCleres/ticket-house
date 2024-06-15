<template>
    <div class="cards">
        <Carousel
            :itemsToShow="itemsToShow"
            :autoplay="true"
            :wrapAround="true"
            :transition="4000"
        >
            <Slide v-for="dado in dados" :key="dado.texto">
                <Card
                    :texto="dado.texto"
                    :icone="dado.icone"
                    :cor="dado.cor"
                    :fundoIcone="dado.fundoIcone"
                    :quantidade="dado.quantidade"
                />
            </Slide>
        </Carousel>
    </div>
</template>
  
  <script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Card from "./Card.vue"; // Certifique-se de importar o componente correto

export default {
    components: {
        Carousel,
        Slide,
        Card,
    },
    props: {
        dados: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            itemsToShow: 4,
        };
    },
    mounted() {
        this.updateItemsToShow();
        window.addEventListener("resize", this.updateItemsToShow);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.updateItemsToShow);
    },
    methods: {
        updateItemsToShow() {
            if (window.innerWidth <= 480) {
                this.itemsToShow = 3;
            } else {
                this.itemsToShow = 4;
            }
        },
    },
};
</script>
  
<style>

.cards {
    height: 16%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    padding: 0;
}

.carousel {
    width: 100%;
}

@media(max-width: 480px) {
    .cards {
        display: inline !important;
    }
}
</style>
  