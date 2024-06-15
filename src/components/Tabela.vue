<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Solicitante</th>
                <th scope="col">Solicitado</th>
                <th scope="col">Tarefa</th>
                <th scope="col">Prazo</th>
                <th scope="col" class="text-center">Status</th>
                <th scope="col" class="text-center">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tarefa, i) in tarefas" :key="i">
                <td>{{ tarefa.solicitante }}</td>
                <td>{{ tarefa.solicitado }}</td>
                <td>{{ tarefa.tarefa }}</td>
                <td>{{ tarefa.prazo }}</td>
                <td class="text-center status">
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
                </td>
                <td class="table__icones text-center">
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
                </td>
            </tr>
        </tbody>
    </table>
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
            ],
        };
    },
};
</script>

<style>
.tabela > table > thead > tr > th {
  color: black;
  font-weight: 500;
}
.status span {
    background: red;
    color: white;
    font-size: 11px;
    padding: 5px;
    border-radius: 20px;
    height: 25px;
}

.table__icones span{
    margin: 0 5px;
    transition: 0.4s;
}

.table__icones span:hover i{
    transform: scale(1.4)
}
</style>