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
                                            Nuevo producto
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
                                                <router-link to="/producto/create" class="nav-link active">
                                                    Nuevo producto
                                                </router-link>

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
                                            Costo
                                        </label>

                                        <!-- Input -->
                                        <input type="number" class="form-control" placeholder="Precio de Costo"
                                            v-model="producto.costo" @keyup="calcularPrecio()" >

                                    </div>

                                </div>

                                <div class="col-12 col-md-6">

                                    <!-- First name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Porcentaje Ganancia % 
                                        </label>

                                        <!-- Input -->
                                        <input type="number" class="form-control" placeholder="Porcentaje de Ganancia"
                                            v-model="producto.porcentaje_ganancia" @keyup="calcularPrecio()">

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
                                        <input type="number" class="form-control" placeholder="Precio de Venta"
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

                            <!-- Divider -->
                            <hr class="mt-4 mb-5">

                            <!-- Button -->
                            <button class="btn btn-primary" v-on:click="validar()">
                                Crear Producto
                            </button>


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
    name: 'CreateProductoApp',

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
                precio: 0,
                costo: 0,
                porcentaje_ganancia: 0,
                estado: false,
                descuento: false,
                portada: undefined
            },
            portada: undefined,
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
            } else if (!this.producto.precio) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agrege el precio',
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
                this.registrarProducto();
            }
        },

        registrarProducto() {
            var fm = new FormData();
            fm.append('titulo', this.producto.titulo);
            fm.append('categoria', this.producto.categoria);
            fm.append('variedad', this.producto.variedad);
            fm.append('costo', this.producto.costo);
            fm.append('porcentaje_ganancia', this.producto.porcentaje_ganancia);
            fm.append('precio', this.producto.precio);
            fm.append('extracto', this.producto.extracto);
            fm.append('estado', this.producto.estado);
            fm.append('descuento', this.producto.descuento);
            fm.append('portada', this.producto.portada);

            axios.post(this.$url + '/producto', fm, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                console.log(result);
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'Se registro el nuevo producto',
                    type: 'success'
                });
                this.$router.push({ name: 'producto-index' })
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

        calcularPrecio(){
            let costo =  parseInt(this.producto.costo);
            let porcen = parseInt(this.producto.porcentaje_ganancia);
            let precio; 

            precio = costo + (costo * (porcen/100) );

            this.producto.precio = precio;
        }

    }
}
</script>
    