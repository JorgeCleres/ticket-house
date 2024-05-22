<template>
    <div class="card">
        <h2 :style="{ color: cor }">{{ texto }}</h2>
        <div class="card-interno">
            <i :style="{ color: cor }" :class="['bi', icone]"></i>
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
    width: 23%;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
    transition: 0.5s;
    background: white;
}

.card:hover {
    box-shadow: 4px 0px 12px rgba(0, 0, 0, 0.5);
}

.card-interno {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

h2 {
    margin: 0;
    font-size: 2rem;
}

i {
    font-size: 3rem;
}

h3 {
    margin: 0;
    font-size: 3.5rem;
}
</style>
  