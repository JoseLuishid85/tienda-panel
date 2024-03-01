<template>
    <div>
        <Sidebar />

        <div class="main-content">

            <TopNav />

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Pretitle -->
                                        <h6 class="header-pretitle">
                                            Categorias
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            <b>Categorias</b>
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->

                            </div>
                        </div>


                        <div class="row mb-3">
                            <div class="col-12">
                                <button v-if="!section_form" class="btn btn-dark btn-sm"
                                    v-on:click="section_form = true;">Nueva categoria</button>
                                <button v-if="section_form" class="btn btn-dark btn-sm"
                                    v-on:click="section_form = false;">Ocultar</button>
                            </div>
                            <div class="col-12 mt-3" v-if="section_form">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Nueva categoria"
                                        v-model="nueva_categoria">
                                    <button class="btn btn-dark" v-on:click="crear_categoria()">Crear categoría</button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush list my-n3">
                                    <li class="list-group-item" v-for="item in categorias">
                                        <div class="row align-items-center">
                                            <div class="col-auto">

                                                <!-- Avatar -->
                                                <a href="profile-posts.html" class="avatar">
                                                    <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                                                        alt="..." class="avatar-img rounded-circle">
                                                </a>

                                            </div>
                                            <div class="col ms-n2">

                                                <!-- Title -->
                                                <h4 class="mb-1 name">
                                                    <a href="#">{{ item.nombre }}</a>
                                                </h4>

                                                <!-- Time -->
                                                <p class="small mb-0" v-if="item.estado">
                                                    <span class="text-success">●</span> Publicado
                                                </p>

                                                <p class="small mb-0" v-if="!item.estado">
                                                    <span class="text-danger">●</span> Oculto
                                                </p>

                                            </div>
                                            <div class="col-auto">

                                                <a v-if="!item.estado" v-on:click="cambiarEstadoCate(item.id,item.estado)" class="btn btn-sm btn-primary text-white" style="margin-right: 1rem; cursor: pointer;">
                                                    Mostrar
                                                </a>

                                                <a v-if="item.estado" v-on:click="cambiarEstadoCate(item.id,item.estado)" class="btn btn-sm btn-danger text-white" style="margin-right: 1rem; cursor: pointer;">
                                                    Ocultar
                                                </a>
                                                <button v-on:click="openInputGroup(item.id)"
                                                    class="btn btn-sm btn-dark text-white">
                                                    Subcategoria
                                                </button>

                                            </div>
                                        </div>
                                        <!-- / .row -->

                                        <div class="input-group mt-4 hide_input content_group" :id="'content_' + item.id">
                                            <input type="text" class="form-control" placeholder="Nueva categoria"
                                                v-model="nueva_subcategoria">
                                            <button class="btn btn-dark" v-on:click="crear_subcategoria()">Crear
                                                subcategoría</button>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col-12">
                                                <ul class="list-group mt-4">

                                                    <li v-for="sub_categoria in item.Sub_Categoria"
                                                        class="list-group-item d-flex justify-content-between align-items-center"
                                                        style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                        {{ sub_categoria.nombre }}
                                                        <a style="cursor: pointer;" v-b-modal="'delete-' + sub_categoria.id"
                                                            class="btn btn-sm btn-danger text-white">
                                                            Quitar
                                                        </a>

                                                        <b-modal centered :id="'delete-' + sub_categoria.id"
                                                            title="BootstrapVue"
                                                            title-html="<h4 class='card-header-title'><b>Add a member</b></h4>"
                                                            @ok="eliminarSubCategoria(sub_categoria.id)">
                                                            <p class="my-4">Esta seguro de eliminar la Sub-Categoria: </p>
                                                            <p class="my-4">{{ sub_categoria.nombre }}</p>
                                                        </b-modal>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div> <!-- / .row -->
            </div>

        </div>
    </div>
</template>

<style>
.hide_input {
    display: none;
}

.show_input {
    display: block;
}
</style>
    
<script>
import axios from 'axios';
import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import $ from 'jquery';

export default {
    name: 'IndexCategoriaApp',
    data() {
        return {
            section_form: false,
            nueva_categoria: '',
            nueva_subcategoria: '',
            id_categoria: '',
            categorias: []
        }
    },
    methods: {
        crear_categoria() {

            if (this.nueva_categoria == '' || this.nueva_categoria == null) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: "El campo categoria esta vacio",
                    type: 'error'
                });
                return;
            }

            let data;
            data = {
                nombre: this.nueva_categoria,
                estado: true
            }
            axios.post(this.$url + '/categoria', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.nueva_categoria = '';
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'Categoria registrada con exito',
                    type: 'success'
                });

            }).catch((error) => {
                console.log(error);
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.msg,
                    type: 'error'
                });
            });
        },
        init_data() {
            axios.get(this.$url + '/categoria/buscar/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.categorias = result.data;
            });
        },

        openInputGroup(id) {
            setTimeout(() => {
                this.id_categoria = id;
                this.nueva_subcategoria = '';
                $('.content_group').addClass('hide_input');
                $('#content_' + id).removeClass('hide_input');
            }, 50);
        },

        crear_subcategoria() {

            if (this.nueva_subcategoria == '' || this.nueva_subcategoria == null) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: "El campo Sub-Categoria esta vacio",
                    type: 'error'
                });
                return;
            }

            axios.post(this.$url + '/sub_categoria', {
                nombre: this.nueva_subcategoria,
                id_categoria: this.id_categoria
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then(() => {
                this.nueva_subcategoria = '';
                this.init_data();
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'Sub-Categoria registrada con exito',
                    type: 'success'
                });

            }).catch((error) => {
                console.log(error);
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.msg,
                    type: 'error'
                });
            });
        },

        eliminarSubCategoria(id) {
            console.log(id);
            axios.delete(this.$url + '/sub_categoria/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then(() => {
                this.init_data();
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'Sub-Categoria fue eliminada con exito',
                    type: 'success'
                });

            }).catch((error) => {
                console.log(error);
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.msg,
                    type: 'error'
                });
            });
        },

        cambiarEstadoCate(id,estado){

            let data = {
                estado: !estado
            };

            console.log(data);

            axios.put(this.$url + '/categoria/estado/' + id , data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                console.log(result);
                this.init_data();
            }).catch((error) => {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.msg,
                    type: 'error'
                });
            });
        }
    },
    beforeMount() {
        this.init_data();
    },
    components: {
        Sidebar,
        TopNav
    },
}
</script>
    