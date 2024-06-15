<template>
    <div class="menu">
        <div class="logo">
            <h1>HELP DESK</h1>
        </div>

        <div class="botao">
            <Botao data-bs-toggle="modal" data-bs-target="#exampleModal" />
            <FontAwesomeIcon :icon="faHouse" />
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Botao from "./Botao.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "Menu",
    components: { Botao },
});
</script>

<style scoped>
.menu {
    width: 10%;
    height: 100vh;
    background: var(--color-primary);
    border-radius: 0 20px 20px 0;
    padding: 10px;
}

.menu h1 {
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: 2.9vh;
}

@media (max-width: 1200px) {
    .menu {
        width: auto;
        height: 10vh;
        background: var(--color-primary);
        border-radius: 0 0 20px 20px;
        padding: 0 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .botao {
        width: 40px !important;
    }   
}
</style>