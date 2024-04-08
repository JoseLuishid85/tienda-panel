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
                                <div class="col-12 col-md-12">

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
                                        <select name="" class="form-select" v-model="producto.id_categoria" @change="init_subCategoria()">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option :value="item.id" v-for="item in categorias">{{ item.nombre }}</option>
                                        </select>

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
                                        <select name="" class="form-select" v-model="producto.id_sub_categoria">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option :value="item.id" v-for="item in subCategorias">{{ item.nombre }}</option>
                                        </select>

                                    </div>

                                </div>

                                <div class="col-12 col-md-4">

                                    <!-- Last name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Costo
                                        </label>

                                        <!-- Input -->
                                        <input type="number" class="form-control" placeholder="Precio de Costo"
                                            v-model="producto.costo" @keyup="calcularPrecio()">

                                    </div>

                                </div>

                                <div class="col-12 col-md-4">

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
                                <div class="col-12 col-md-4">

                                    <!-- Last name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Precio
                                        </label>

                                        <!-- Input -->
                                        <input type="number" class="form-control" placeholder="Precio"
                                            v-model="producto.precio">

                                    </div>

                                </div>



                            </div> <!-- / .row -->

                            <div class="row">
                                <div class="col-12">

                                    <h3>Variedades</h3>

                                    <!-- Public profile -->
                                    <div class="form-group">
                                        <div class="row">

                                        
                                        <!-- Label -->
                                        <div class="col-3">
                                            <label class="mb-1">
                                                Talla
                                            </label>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" id="switchOne"
                                                            v-model="producto.talla" />
                                                        <label class="form-check-label" for="switchOne"></label>
                                                    </div>
                                            </div> 
                                        </div>

                                        <div class="col-3">
                                            <label class="mb-1">
                                                Color
                                            </label>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" id="switchOne"
                                                            v-model="producto.color" />
                                                        <label class="form-check-label" for="switchOne"></label>
                                                    </div>

                                                </div>
                                        </div>

                                        <div class="col-3">
                                            <label class="mb-1">
                                                Medida
                                            </label>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" id="switchOne"
                                                            v-model="producto.medida" />
                                                        <label class="form-check-label" for="switchOne"></label>
                                                    </div>

                                                </div>
                                        </div>
                                        
                                        </div>
                                    </div>

                                </div>
                            </div>

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
                                <div class="col-lg-4" v-if="producto.talla">
                                    <small class="text-muted">
                                        Talla
                                    </small>
                                    <input type="text" class="form-control" placeholder="Talla del Producto"
                                        v-model="variedad.talla">
                                </div>
                                <div class="col-lg-4" v-if="producto.color" >
                                    <small class="text-muted">
                                        Color
                                    </small>
                                    <input type="text" class="form-control" placeholder="Color del Producto"
                                        v-model="variedad.color">
                                </div>
                                <div class="col-lg-4" v-if="producto.medida">
                                    <small class="text-muted">
                                        Medida
                                    </small>
                                    <input type="text" class="form-control" placeholder="Medida"
                                        v-model="variedad.medida">
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

                                                    <h4 class="mb-1" v-if="item.talla"> {{ item.talla.toUpperCase() }} </h4>
                                                    <h4 class="mb-1" v-if="item.color"> {{ item.color.toUpperCase() }} </h4>
                                                    <h4 class="mb-1" v-if="item.medida"> {{ item.medida.toUpperCase() }} </h4>

                                                    <small class="text-muted">
                                                        <b>SKU: </b> {{ item.sku.toUpperCase() }}
                                                    </small>

                                                </div>
                                                <div class="col">
                                                    <h4 class="mb-1">
                                                        {{ item.stock }}
                                                    </h4>

                                                    <small class="text-muted">
                                                        Unidades
                                                    </small>
                                                </div>
                                                <div class="col-auto">

                                                    <button v-if="item.stock == 0" class="btn btn-sm btn-danger"
                                                        type="button" v-b-modal="'delete-' + item.id">
                                                        Eliminar
                                                    </button>

                                                    <button v-if="item.stock > 0" disabled class="btn btn-sm btn-danger"
                                                        type="button" v-b-modal="'delete-' + item.id">
                                                        Eliminar
                                                    </button>

                                                </div>
                                                <b-modal centered :id="'delete-' + item.id" title="BootstrapVue"
                                                    title-html="<h4 class='card-header-title'><b>Add a member</b></h4>"
                                                    @ok="eliminarVariedad(item.id)">
                                                    <p class="my-4">{{ item.sku }}</p>
                                                </b-modal>
                                            </div> 
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
                id_categoria: '',
                id_sub_categoria: '',
                precio: 0,
                costo: 0,
                porcentaje_ganancia: 0,
                extracto: '',
                talla: false,
                color: false,
                medida: false,
                estado: false,
                descuento: false,
                portada: undefined
            },
            portada: undefined,
            variedad: {},
            variedades: [],
            categorias: [],
            subCategorias: [],

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
                console.log(this.producto);
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
            } else if (!this.producto.id_categoria) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Seleccione una categoria',
                    type: 'error'
                });
            }else if (!this.producto.id_sub_categoria) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Seleccione una Sub-Categoria',
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
                data.append('id_categoria', this.producto.id_categoria);
                data.append('id_sub_categoria', this.producto.id_sub_categoria);
                data.append('variedad', this.producto.variedad);
                data.append('costo', this.producto.costo);
                data.append('porcentaje_ganancia', this.producto.porcentaje_ganancia);
                data.append('precio', this.producto.precio);
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
            console.log("validarVariedad");
            /*
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
            }*/

            this.variedad.id_producto = this.$route.params.id;
            this.variedad.sku = this.generarSKU();
            this.registrarVariedad();

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

        init_categorias() {
            axios.get(this.$url + '/categoria/buscar/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.categorias = result.data;
                this.init_subCategoria();
            }).catch((error) => {
                console.log(error);
            });
        },

        init_subCategoria(){
            let id_categoria = this.producto.id_categoria
            let subcat;

            subcat = this.categorias.filter(cat => cat.id == id_categoria);
            this.subCategorias = subcat[0].Sub_Categoria;
        },

        generarSKU() {
            //let sku = this.producto.titulo.substr(0, 3) + '' + this.producto.variedad.substr(0, 3) + '' + this.variedad.variedad.substr(0, 3) + '' + this.variedad.proveedor.substr(0, 3);
            let  sku;
            if(this.producto.talla){
                sku = this.producto.titulo.substr(0, 3) + '' + this.variedad.talla.substr(0, 3);
            }

            if(this.producto.color){
                sku = this.producto.titulo.substr(0, 3) + '' + this.variedad.color.substr(0, 3);
            }

            if(this.producto.medida){
                sku = this.producto.titulo.substr(0, 3) + '' + this.variedad.medida.substr(0, 3);
            }
            
            
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

            }).catch((error) => {
                console.log(error);
            });
        },

        eliminarVariedad(id) {
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
        },

        calcularPrecio() {
            let costo = parseInt(this.producto.costo);
            let porcen = parseInt(this.producto.porcentaje_ganancia);
            let precio;

            precio = costo + (costo * (porcen / 100));

            this.producto.precio = precio;
        }

    },
    beforeMount() {
        this.init_data();
        this.init_categorias();
        this.init_variedad();
    }
}
</script>
    