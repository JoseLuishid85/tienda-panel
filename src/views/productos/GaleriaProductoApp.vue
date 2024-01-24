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


                        <div class="mb-7">
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
                                            <input type="file" id="input_file" class="form-control" placeholder="Selecciona la imagen" v-on:change="uploadImage($event)">
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

                            <div class="row listAlias">
                                <div class="col-12 col-md-6 col-xl-4">
                                    <div class="card">
                                        <a href="project-overview.html">
                                            <img src="https://dashkit.goodthemes.co/assets/img/avatars/projects/project-1.jpg"
                                                alt="..." class="card-img-top">
                                        </a>
                                        <div class="card-footer card-footer-boxed">
                                            <div class="row">
                                                <div class="col text-center">
                                                    <a href="" class="text-danger">Eliminar imagen</a>
                                                </div>

                                            </div> <!-- / .row -->
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div> <!-- / .row -->
            </div>

        </div>
    </div>
</template>
    
<script>
import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import axios from 'axios';
import $ from "jquery";

export default {
    name: 'GaleriaProductoApp',

    components: {
        Sidebar,
        TopNav
    },
    data() {
        return {
            imagen: undefined,
            str_image: '',
        }
    },
    methods: {
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

            if(this.imagen === undefined){
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
            }).catch((error) => {
                console.log(error);/*
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.msg,
                    type: 'error'
                });*/
            });
        }
    },
    
}
</script>
    