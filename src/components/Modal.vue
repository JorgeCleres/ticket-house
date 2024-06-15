<template>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Solicitante">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Solicitado">
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-7">
                            <input type="text" class="form-control" placeholder="Titulo">
                        </div>
                        <div class="col-5">
                            <input type="date" class="form-control" placeholder="Prazo">
                            <small class="form-text text-muted">Prazo da tarefa</small>
                        </div>
                    </div>
                    <div class="form-group mt-5">
                        <textarea class="form-control" id="descricao" rows="3" placeholder="Descrição"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn fechar" data-bs-dismiss="modal">
                        Fechar
                    </button>
                    <button type="button" class="btn save">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
export default {
    name: "App",
};
</script>
  
<style>
    .form-text {
        font-size: .675em;
    }

    .save {
        background: green;
        color: white !important;
        transition: 0.5s;
    }

    .save:hover {
        background: white;
        border: 1px solid green;
        color: green !important;
        transition: 0.5s;
    }

    .fechar {
        background: #fb4141;
        color: white !important;
        transition: 0.5s;
    }

    .fechar:hover {
        background: white;
        border: 1px solid #fb4141;
        color: #fb4141 !important;
        transition: 0.5s;
    }

</style>
  