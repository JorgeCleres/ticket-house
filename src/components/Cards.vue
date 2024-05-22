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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    padding: 0;
}
</style>