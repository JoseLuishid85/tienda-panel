<template>
    <div>
        <Sidebar />

        <div class="main-content">

            <TopNav />

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <!-- Header -->
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Pretitle -->
                                        <h6 class="header-pretitle">
                                            Productos
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Galeria de producto
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/producto" class="nav-link">Todos los
                                                    productos</router-link>
                                            </li>
                                            <li class="nav-item">

                                                <a class="nav-link active">
                                                    Galeria de producto
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <template v-if="!load_data">
                            <div>
                                <div class="mb-7" v-if="data">
                                    <div class="row">
                                        <div class="col-12 col-md-12">

                                            <!-- Email address -->
                                            <div class="form-group">

                                                <!-- Label -->
                                                <label class="mb-1">
                                                    Imagen
                                                </label>



                                                <!-- Input -->
                                                <div class="input-group mb-3">
                                                    <input type="file" id="input_file" class="form-control"
                                                        placeholder="Selecciona la imagen"
                                                        v-on:change="uploadImage($event)">
                                                    <button class="btn btn-primary" v-on:click="subirImage()">
                                                        <i class="fe fe-upload"></i>
                                                    </button>
                                                </div>
                                                <!-- Form text -->
                                                <small class="form-text text-muted">
                                                    Subo un maximo de 5 imagenes para la galeria del producto.
                                                </small>
                                            </div>

                                        </div>

                                    </div> <!-- / .row -->

                                    <div class="row listAlias" v-if="!load_galeria">
                                        <div class="col-6 col-md-4 col-xl-3" v-for="item of galeria">
                                            <div class="card">
                                                <a href="#">
                                                    <img :src="$url + '/producto/obtener_galeria_producto/' + item.image"
                                                        alt="..." class="card-img-top">
                                                </a>
                                                <div class="card-footer card-footer-boxed">
                                                    <div class="row">
                                                        <div class="col text-center">
                                                            <a class="text-danger" style="cursor: pointer;"
                                                                v-b-modal="'delete-' + item.id">Eliminar imagen</a>

                                                            <b-modal centered :id="'delete-' + item.id" title="BootstrapVue"
                                                                title-html="<h4 class='card-header-title'><b>Eliminar Imagen</b></h4>"
                                                                @ok="eliminarImagen(item.id)">
                                                                <p class="my-4">Esta seguro de eliminar la imagen</p>
                                                            </b-modal>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-2" v-if="load_galeria">
                                        <div class="col-12 text-center">
                                            <div class="spinner-border text-primary" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <template v-if="!data">
                                    <ErrorNotFound />
                                </template>
                            </div>
                        </template>

                        <template v-if="load_data">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </template>





                    </div>
                </div> <!-- / .row -->
            </div>

        </div>
    </div>
</template>
    
<script>
import ErrorNotFound from '@/components/ErrorNotFound.vue';
import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import axios from 'axios';
import $ from "jquery";

export default {
    name: 'GaleriaProductoApp',

    components: {
        Sidebar,
        TopNav,
        ErrorNotFound
    },
    data() {
        return {
            imagen: undefined,
            str_image: '',
            data: false,
            load_data: true,
            load_galeria: true,
            galeria: [],
        }
    },
    methods: {
        init_data() {
            this.load_data = true;
            axios.get(this.$url + '/producto/obtener_producto/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.producto = result.data;
                this.data = true;
                this.load_data = false;

                this.str_image = this.$url + '/producto/obtener_image_producto/' + this.producto.portada;
            }).catch((error) => {
                this.data = false;
                this.load_data = false;

            });
        },

        uploadImage($event) {

            var image;
            if ($event.target.files.length >= 1) {
                image = $event.target.files[0];
            }

            if (image.size > 100000) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'La imagen debe pesar menos de 1MB',
                    type: 'error'
                });
                this.imagen = undefined;
                $('#input_file').val('');
            }

            if (image.type == 'image/jpeg' || image.type == 'image/png' || image.type == 'image/webp' || image.type == 'image/jpg') {
                this.str_image = URL.createObjectURL(image);
                this.imagen = image;

            } else {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'El archivo de a subir debe ser una imagen',
                    type: 'error'
                });
                this.imagen = undefined;
                $('#input_file').val('');
            }

            console.log(this.imagen);
        },

        subirImage() {

            if (this.imagen === undefined) {
                return this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Debe seleccionar una imagen',
                    type: 'error'
                });
            }

            var data = new FormData();
            data.append('id_producto', this.$route.params.id);
            data.append('imagen', this.imagen);

            axios.post(this.$url + '/producto/subir_imagen_produco_admin', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                console.log(result);
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'La imagen de subio con exito',
                    type: 'success'
                });
                this.init_galeria();
            }).catch((error) => {
                console.log(error);/*
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.msg,
                    type: 'error'
                });*/
            });
        },

        init_galeria() {
            this.load_galeria = true;
            axios.get(this.$url + '/producto/obtener_galeria_producto_admin/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.galeria = result.data;
                console.log(this.galeria);
                this.load_galeria = false;

            }).catch((error) => {
                this.load_galeria = false;
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.msg,
                    type: 'error'
                });
            });
        },

        eliminarImagen(id){
            axios.delete(this.$url + '/producto/eliminar_galeria_producto_admin/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'La imagen se elimino con exito',
                    type: 'success'
                });
                this.init_galeria();

            }).catch((error) => {
                console.log(error);
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
        this.init_galeria();
    }

}
</script>
    