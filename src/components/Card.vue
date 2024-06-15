<template>
    <div class="card">
        <div class="card__cima">
            <span :style="{ background: fundoIcone }">
                <i :style="{ color: cor }" :class="['bi', icone]"></i>
            </span>
            <h2 :style="{ color: cor }">{{ texto }}</h2>
        </div>
        <div class="card__baixo">
            <h3 :style="{ color: cor }">{{ quantidade }}</h3>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Card",
    props: {
        texto: {
            type: String,
            default: "",
        },
        cor: {
            type: String,
            default: "",
        },
        fundoIcone: {
            type: String,
            default: "",
        },
        quantidade: {
            type: [String, Number],
            default: "0",
        },
        icone: {
            type: String,
            default: "",
        },
    },
});
</script>
  
<style scoped>
.card {
    width: 100%;
    padding: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
    transition: 0.5s;
    background: white;
    margin: 0 5px;
}

.card:hover {
    box-shadow: 4px 0px 12px rgba(0, 0, 0, 0.5);
}

.card__cima {
    display: flex;
}

h2 {
    margin: 5px 0;
}

i {
    font-size: 2.8vh;
}

.card__cima span {
    border-radius: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 0 0;
}

.card__baixo {
    display: flex;
    justify-content: end;
}

.card__baixo h3 {
    font-size: 4vh;
    margin: 0;
}

@media(max-width: 480px) {
    .card__cima {
        display: flex;
        flex-direction: column;
    }
    .card__cima span {
        width: 35px;
    }
    h2 {
        margin: 5px 0;
        font-size: 12px;
        text-align: left;
    }
}

</style>
  