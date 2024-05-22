<template>
    <div class="home">
        <Menu />
        <Conteudo />
    </div>
</template>

<script setup lang="ts">
    import Menu from './components/Menu.vue'
    import Conteudo from './components/Conteudo.vue'
</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: row;
    }

    @media(max-width: 1200px) {
        .home {
            display: flex;
            flex-direction: column;
        }
    }
</style>