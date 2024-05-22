<template>
    <button>{{ screen ? "Adicionar" : "+" }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Botao",
    data() {
        return {
            screen: true,
        };
    },
    mounted() {
        window.innerWidth <= 1200
            ? (this.screen = false)
            : (this.screen = true);
    },
});
</script>

<style scoped>
button {
    font-size: 15px;
    color: #017eb6;
    padding: 6px;
    width: -webkit-fill-available;
    text-transform: uppercase;
    border-radius: 9px;
    border: 1px solid white;
    font-weight: 700;
    transition: 0.4s;
}
button:hover {
    font-size: 15px;
    color: white;
    background: #017eb6;
    padding: 6px;
    width: -webkit-fill-available;
    text-transform: uppercase;
    border-radius: 9px;
    border: 1px solid #09aefa;
    font-weight: 700;
    box-shadow: 2px 2px 9px grey;
}
</style>