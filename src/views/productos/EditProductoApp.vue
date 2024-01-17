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
                                            Editar producto
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/producto/" class="nav-link">
                                                    Todos los productos
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active">Editar producto</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-7">

                            <div class="row justify-content-between align-items-center">
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-auto">

                                            <!-- Avatar -->
                                            <div class="avatar">
                                                <img class="avatar-img rounded-circle" :src="str_image" alt="...">
                                            </div>

                                        </div>
                                        <div class="col ms-n2">

                                            <!-- Heading -->
                                            <h4 class="mb-1">
                                                <b>Portada</b>
                                            </h4>

                                            <!-- Text -->
                                            <small class="text-muted">
                                                PNG or JPG no bigger than 1000px wide and tall.
                                            </small>

                                        </div>
                                    </div> <!-- / .row -->
                                </div>
                                <div class="col-auto">

                                    <!-- Button -->

                                    <label for="file-upload" class="btn btn-sm btn-primary">
                                        Upload
                                    </label>
                                    <input style="display:none" id="file-upload" v-on:change="uploadImage($event)"
                                        type="file" />

                                </div>
                            </div> <!-- / .row -->

                            <!-- Divider -->
                            <hr class="my-5">

                            <div class="row">
                                <div class="col-12 col-md-6">

                                    <!-- Email address -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="mb-1">
                                            Título del producto
                                        </label>

                                        <!-- Form text -->
                                        <small class="form-text text-muted">
                                            This contact will be shown to others publicly.
                                        </small>

                                        <!-- Input -->
                                        <input type="text" class="form-control" placeholder="Título del producto"
                                            v-model="producto.titulo">

                                    </div>

                                </div>
                                <div class="col-12 col-md-6">

                                    <!-- First name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Categoria
                                        </label>

                                        <small class="form-text text-muted">
                                            This contact will be shown to others publicly.
                                        </small>

                                        <!-- Input -->
                                        <select name="" class="form-select" v-model="producto.categoria">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option value="Categoria 1">Categoria 1</option>
                                            <option value="Categoria 2">Categoria 2</option>
                                            <option value="Categoria 3">Categoria 3</option>
                                        </select>

                                    </div>

                                </div>

                                <div class="col-12 col-md-6">

                                    <!-- First name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Variedad
                                        </label>

                                        <!-- Input -->
                                        <select name="" class="form-select" v-model="producto.variedad">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option value="Talla">Talla</option>
                                            <option value="Color">Color</option>
                                        </select>

                                    </div>

                                </div>
                                <div class="col-12 col-md-6">

                                    <!-- Last name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Precio
                                        </label>

                                        <!-- Input -->
                                        <input type="number" readonly class="form-control" placeholder="Precio"
                                            v-model="producto.precio">

                                    </div>

                                </div>

                                <div class="col-12 col-md-12">

                                    <!-- Phone -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Extracto
                                        </label>

                                        <!-- Input -->
                                        <textarea class="form-control" id="" rows="3" placeholder="Extracto"
                                            v-model="producto.extracto"></textarea>

                                    </div>

                                </div>

                            </div> <!-- / .row -->



                            <div class="row">
                                <div class="col-12 col-md-6">

                                    <!-- Public profile -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="mb-1">
                                            Producto publicado
                                        </label>

                                        <!-- Form text -->
                                        <small class="form-text text-muted">
                                            Making your profile public means that anyone on the Dashkit network will be able
                                            to find you.
                                        </small>

                                        <div class="row">
                                            <div class="col-auto">

                                                <!-- Switch -->
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="switchOne"
                                                        v-model="producto.estado" />
                                                    <label class="form-check-label" for="switchOne"></label>
                                                </div>

                                            </div>
                                            <div class="col ms-n2">

                                                <!-- Help text -->
                                                <small class="text-muted">
                                                    Borrador activado
                                                </small>

                                            </div>
                                        </div> <!-- / .row -->
                                    </div>

                                </div>
                                <div class="col-12 col-md-6">

                                    <!-- Allow for additional Bookings -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="mb-1">
                                            En descuento
                                        </label>

                                        <!-- Form text -->
                                        <small class="form-text text-muted">
                                            If you are available for hire outside of the current situation, you can
                                            encourage others to hire you.
                                        </small>

                                        <div class="row">
                                            <div class="col-auto">

                                                <!-- Switch -->
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="switchTwo"
                                                        v-model="producto.descuento" />
                                                    <label class="form-check-label" for="switchTwo"></label>
                                                </div>

                                            </div>
                                            <div class="col ms-n2">

                                                <!-- Help text -->
                                                <small class="text-muted">
                                                    Descuento desactivado
                                                </small>

                                            </div>
                                        </div> <!-- / .row -->
                                    </div>

                                </div>
                            </div> <!-- / .row -->

                            <button class="btn btn-primary mt-5" v-on:click="validar()">
                                Actualizar
                            </button>

                            <!-- Divider -->
                            <hr class="mt-4 mb-5">

                            <!-- Button -->


                            <div class="row justify-content-between align-items-center mb-5">
                                <div class="col-12">

                                    <!-- Heading -->
                                    <h2 class="mb-2">
                                        Variedades de producto
                                    </h2>

                                    <!-- Text -->
                                    <p class="text-muted mb-xl-0">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore aspernatur,
                                        beatae id quod consequuntur.
                                    </p>
                                </div>

                            </div>

                            <div class="row mb-5">
                                <div class="col-lg-5">
                                    <small class="text-muted">
                                        Proveedor
                                    </small>
                                    <input type="text" class="form-control" placeholder="Empresa proveedora"
                                        v-model="variedad.proveedor">
                                </div>
                                <div class="col-lg-5">
                                    <small class="text-muted">
                                        Variedad
                                    </small>
                                    <input type="text" class="form-control" placeholder="Tallas, colores..."
                                        v-model="variedad.variedad">
                                </div>
                                <div class="col">
                                    <small class="text-muted">
                                        Acción*
                                    </small> <br>
                                    <button class="btn btn-primary btn-block" style="width: 100% !important;"
                                        v-on:click="validarVariedad()">Agregar</button>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-body">

                                    <!-- List group -->
                                    <div class="list-group list-group-flush my-n3">

                                        <div class="list-group-item" v-for="item in variedades">
                                            <div class="row align-items-center">
                                                <div class="col">

                                                    <!-- Heading -->
                                                    <h4 class="mb-1">
                                                        {{ item.variedad.toUpperCase() }}
                                                    </h4>

                                                    <!-- Text -->
                                                    <small class="text-muted">
                                                        <b>SKU: </b> {{ item.sku.toUpperCase() }}
                                                    </small>

                                                </div>
                                                <div class="col">
                                                    <h4 class="mb-1">
                                                        {{ item.stock }}
                                                    </h4>

                                                    <!-- Text -->
                                                    <small class="text-muted">
                                                        Unidades
                                                    </small>
                                                </div>
                                                <div class="col-auto">

                                                    <!-- Button -->
                                                    <button v-if="item.stock == 0" class="btn btn-sm btn-danger" type="button"
                                                        v-b-modal="'delete-' + item.id">
                                                        Eliminar
                                                    </button>

                                                    <button v-if="item.stock > 0" disabled class="btn btn-sm btn-danger" type="button"
                                                        v-b-modal="'delete-' + item.id">
                                                        Eliminar
                                                    </button>

                                                </div>
                                                <b-modal centered :id="'delete-' + item.id" title="BootstrapVue"
                                                    title-html="<h4 class='card-header-title'><b>Add a member</b></h4>"
                                                    @ok="eliminarVariedad(item.id)">
                                                    <p class="my-4">{{ item.sku }}</p>
                                                </b-modal>
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

export default {
    name: 'EditProductoApp',

    components: {
        Sidebar,
        TopNav
    },

    data() {
        return {
            str_image: '/assets/img/producto.png',
            producto: {
                categoria: '',
                variedad: '',
                estado: false,
                descuento: false,
                portada: undefined
            },
            portada: undefined,
            variedad: {},
            variedades: [],

        }
    },

    methods: {
        init_data() {
            axios.get(this.$url + '/producto/obtener_producto/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.producto = result.data;
                console.log(this.producto)
                this.str_image = this.$url + '/producto/obtener_image_producto/' + this.producto.portada;
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
                this.portada = undefined;
            }

            if (image.type == 'image/jpeg' || image.type == 'image/png' || image.type == 'image/webp' || image.type == 'image/jpg') {
                this.str_image = URL.createObjectURL(image);
                this.portada = image;
                this.producto.portada = this.portada;
            } else {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'El archivo de a subir debe ser una imagen',
                    type: 'error'
                });
                this.portada = undefined;
            }
        },

        validar() {
            if (!this.producto.titulo) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agregar el titulo',
                    type: 'error'
                });
            } else if (!this.producto.categoria) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Seleccione una categoria',
                    type: 'error'
                });
            } else if (!this.producto.variedad) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Seleccione una variedad',
                    type: 'error'
                });
            } else if (!this.producto.extracto) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agrege el extracto',
                    type: 'error'
                });
            } else if (this.producto.portada === undefined) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agrege una imagen',
                    type: 'error'
                });
            } else {
                this.actualizarProducto();
            }
        },

        actualizarProducto() {
            var data;
            var content = '';
            if (this.portada != undefined) {
                content = 'multipart/form-data';
                data = new FormData();
                data.append('titulo', this.producto.titulo);
                data.append('categoria', this.producto.categoria);
                data.append('variedad', this.producto.variedad);
                data.append('extracto', this.producto.extracto);
                data.append('estado', this.producto.estado);
                data.append('descuento', this.producto.descuento);
                data.append('portada', this.producto.portada);
            } else {
                content = 'application/json';
                data = this.producto;
            }


            axios.put(this.$url + '/producto/actualizar_producto/' + this.$route.params.id, data, {
                headers: {
                    'Content-Type': content,
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                console.log(result);
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'Producto actulizado con exito',
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
            })
        },

        validarVariedad() {
            if (!this.variedad.proveedor) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agregar el proveedor',
                    type: 'error'
                });
            } else if (!this.variedad.variedad) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agregar el variedad',
                    type: 'error'
                });
            } else {
                this.variedad.id_producto = this.$route.params.id;
                this.variedad.sku = this.generarSKU();
                this.registrarVariedad();
            }

        },

        registrarVariedad() {
            axios.post(this.$url + '/variedad', this.variedad, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.variedad = {};
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'La variedad se registro con exito',
                    type: 'success'
                });
                this.init_variedad();

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

        generarSKU() {
            let sku = this.producto.titulo.substr(0, 3) + '' + this.producto.variedad.substr(0, 3) + '' + this.variedad.variedad.substr(0, 3) + '' + this.variedad.proveedor.substr(0, 3);
            return sku.toUpperCase();
        },

        init_variedad() {
            axios.get(this.$url + '/variedad/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.variedades = result.data;
                console.log(this.variedades);

            }).catch((error) => {
                console.log(error);
            });
        },

        eliminarVariedad(id){
            axios.delete(this.$url + '/variedad/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'La variedad fue eliminada con exito',
                    type: 'success'
                });
                this.init_variedad();

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
        this.init_variedad();
    }
}
</script>
    