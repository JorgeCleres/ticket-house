<template>
        <div class="tabela-mobile" v-for="(tarefa, i) in tarefas" :key="i">
            <div class="direito">
                <h6><span>Solicitante: </span> {{ tarefa.solicitante }}</h6>
                <h6><span>Solicitado: </span> {{ tarefa.solicitado }}</h6>
                <h6><span>Tarefa: </span>{{ tarefa.tarefa }}</h6>
            </div>

            <div class="esquerdo">
                <div class="text-center status">
                    <h6>{{ tarefa.prazo }}</h6>
                    <span
                        v-if="tarefa.status === `Atrasado`"
                        style="background: #ff4560"
                        >{{ tarefa.status }}</span
                    >
                    <span
                        v-if="tarefa.status === `Fechado`"
                        style="background: #1aa464"
                        >{{ tarefa.status }}</span
                    >
                    <span
                        v-if="tarefa.status === `Aberto`"
                        style="background: #008ffb"
                        >{{ tarefa.status }}</span
                    >
                </div>

                <div class="table__icones text-center">
                    <span v-if="tarefa.status === `Atrasado` ||tarefa.status === 'Aberto'">
                        <i class="bi bi-play-fill" type="button"></i>
                    </span>
                    <span v-else>
                        <i class="bi bi-pause-fill" type="button"></i>
                    </span>
                    <span>
                        <i class="bi bi-pencil-square" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    </span>
                    <span>
                        <i class="bi bi-question-circle" type="button" data-bs-toggle="modal" data-bs-target="#modalInfo"></i>
                    </span>
                </div>
            </div>
        </div>
</template>
  
<script>
export default {
    data() {
        return {
            tarefas: [
                {
                    solicitante: "Jorge",
                    solicitado: "Giovana",
                    tarefa: "Costurar Cuecas",
                    prazo: "3 dias",
                    status: "Atrasado",
                },
                {
                    solicitante: "Giovana",
                    solicitado: "Jorge",
                    tarefa: "Arrumar torneira",
                    prazo: "2 dias",
                    status: "Aberto",
                },
                {
                    solicitante: "Giovana",
                    solicitado: "Jorge",
                    tarefa: "Arrumar interruptor banheiro",
                    prazo: "5 dias",
                    status: "Fechado",
                },
                {
                    solicitante: "Jorge",
                    solicitado: "Giovana",
                    tarefa: "Lavar carro",
                    prazo: "3 dias",
                    status: "Aberto",
                },
                {
                    solicitante: "Jorge",
                    solicitado: "Giovana",
                    tarefa: "Costurar Cuecas",
                    prazo: "3 dias",
                    status: "Atrasado",
                },
                {
                    solicitante: "Giovana",
                    solicitado: "Jorge",
                    tarefa: "Arrumar torneira",
                    prazo: "2 dias",
                    status: "Aberto",
                },
                {
                    solicitante: "Giovana",
                    solicitado: "Jorge",
                    tarefa: "Arrumar interruptor banheiro",
                    prazo: "5 dias",
                    status: "Fechado",
                },
                {
                    solicitante: "Jorge",
                    solicitado: "Giovana",
                    tarefa: "Lavar carro",
                    prazo: "3 dias",
                    status: "Aberto",
                },
            ],
        };
    },
};
</script>

<style>
    .tabela-mobile {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-bottom: 1px solid #c7c7c7;
    }

    .direito span{
        font-style: normal;
        font-weight: 300;
    }

    .direito h6{
        font-style: italic;
        font-weight: 800;
        font-size: 15px;
    }

    .esquerdo {
        width: 30%;
    }

    .status {
        display: flex;
        justify-content: space-evenly;
    }

    .status h6 {
        margin: 6px 5px 0 0;
        font-size: 11px;
    }

    .table__icones {
        margin: 15px 0 0;
    }

    .table__icones span{
        margin: 0 0.7vh;
    }
    .table__icones span i {
        font-size: 20px;
    }
</style>