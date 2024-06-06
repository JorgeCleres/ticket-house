<template>
    <div class="cards">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Cards",
});
</script>

<style scoped>
.cards {
    height: 16%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    padding: 0;
}

@media(max-width: 480px) {
    .cards {
        display: inline !important;
    }
}
</style>