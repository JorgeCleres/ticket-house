<template>
    <div class="conteudo">
        <cards>
            <card texto="Total Tickets" icone="bi-ticket" cor="#017EB6" quantidade="10"/>
            <card texto="Tickets Abertos" icone="bi-lock" cor="#0D9B58" quantidade="10"/>
            <card texto="Tickets Fechados" icone="bi-unlock" cor="#646464" quantidade="10"/>
            <card texto="Total Atrasados" icone="bi-hourglass" cor="#FD6244" quantidade="10"/>
        </cards>
    </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
import Cards from './Cards.vue';
import { defineComponent } from "vue";

export default defineComponent({
    components: { Card, Cards },
    name: "Conteudo",
});
</script>

<style scoped>
.conteudo {
    width: 100%;
    padding: 15px 10px;
    background: rgb(240, 240, 240);
}
</style>