
import { Axios } from 'axios';

import { Axios } from 'axios';
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
                                            Ingreso
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Nuevo Ingreso
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <a class="nav-link ">
                                                    Ingresos
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active">Nuevo Ingreso</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Proveedor
                                    </label>
                                    <small class="form-text text-muted">
                                        Proveedor encargado del ingreso.
                                    </small>
                                    <!-- Input -->
                                    <select class="form-select mb-3" v-model="ingreso.proveedor">
                                        <option value="" disabled selected>Seleccionar</option>
                                        <option>My first option</option>
                                        <option>Another option</option>
                                        <option>Third option is here</option>
                                    </select>

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        N° comprobante
                                    </label>
                                    <small class="form-text text-muted">
                                        Número de la factura.
                                    </small>
                                    <!-- Input -->
                                    <input type="text" class="form-control" v-model="ingreso.ncomprobante"
                                        placeholder="5DSF-000154">

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Monto total
                                    </label>
                                    <small class="form-text text-muted">
                                        Monto total pagado al proveedor.
                                    </small>
                                    <!-- Input -->
                                    <input type="text" class="form-control" v-model="ingreso.monto_total" placeholder="546">

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Comprobante
                                    </label>
                                    <small class="form-text text-muted">
                                        Subir comprobante del ingreso.
                                    </small>
                                    <!-- Input -->
                                    <input type="file" class="form-control" v-on:change="uploadComprobante($event)">

                                </div>

                            </div>
                        </div>

                        <hr class="my-5">

                        <div class="row">

                            <div class="col-md-12 mb-4">
                                <h3><b>Productos del ingreso</b></h3>
                            </div>

                            <div class="col-12 col-md-6">

                                <!-- First name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Producto
                                    </label>
                                    <small class="form-text text-muted">
                                        Selección de Producto
                                    </small>
                                    <!-- Input -->
                                    <basic-select :options="productos" v-model="producto" placeholder="select item"
                                        :selected-option="producto" @select="producto_selected">
                                    </basic-select>

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <!-- First name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Variedad
                                    </label>
                                    <small class="form-text text-muted">
                                        Selección de Variedad
                                    </small>
                                    <!-- Input -->
                                    <select class="form-select mb-3" v-model="detalle.id_variedad">
                                        <option value="" disabled selected>Seleccionar</option>
                                        <option :value="item.id" v-for="item in variedades">{{ item.variedad.toUpperCase()
                                        }} - {{ item.sku }} - {{ item.stock }}</option>
                                    </select>

                                </div>

                            </div>


                            <div class="col-12 col-md-6">

                                <!-- Phone -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Precio unidad
                                    </label>
                                    <small class="form-text text-muted">
                                        Precio por unidad pagado
                                    </small>
                                    <!-- Input -->
                                    <input type="number" class="form-control mb-3" placeholder="0.00"
                                        v-model="detalle.precio_unidad">

                                </div>

                            </div>
                            <div class="col-12 col-md-6">

                                <!-- Birthday -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Cantidad total
                                    </label>
                                    <small class="form-text text-muted">
                                        Cantidad total comprada
                                    </small>
                                    <!-- Input -->
                                    <input type="number" class="form-control mb-3" placeholder="0"
                                        v-model="detalle.cantidad">

                                </div>

                            </div>

                            <div class="col-md-12">

                                <button class="btn btn-primary" style="margin-bottom: 1.8rem!important;"
                                    v-on:click="agregar_detalle()">
                                    Agregar
                                </button>
                            </div>
                        </div> <!-- / .row -->

                        <!-- Button -->
                        <div class="card ">
                            <div class="table-responsive mb-0">
                                <table class="table table-sm table-nowrap card-table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio Unidad</th>
                                            <th>Cantidad</th>
                                            <th>Sub-Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-base" v-if="detalles.length >= 1">
                                        <tr v-for="(item, index) in detalles">
                                            <td>
                                                <a href="invoice.html">{{ item.titulo_producto }}</a>
                                            </td>
                                            <td>
                                                <time datetime="2020-04-24">{{ convertCurrency(item.precio_unidad) }}</time>
                                            </td>
                                            <td>
                                                {{ item.cantidad }}
                                            </td>
                                            <td>
                                                {{ convertCurrency(item.precio_unidad * item.cantidad) }}
                                                <!--  -->
                                            </td>
                                            <td>
                                                <button class="btn btn-danger btn-sm"
                                                    v-on:click="quitarDetalle(index, item.precio_unidad * item.cantidad)">Quitar</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody class="fs-base" v-if="detalles.length == 0">
                                        <tr>
                                            <td class="text-center" colspan="5">
                                                <span class="text-muted">No hay detalles en el ingreso</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="3">Total</td>
                                            <td>{{ convertCurrency(total) }}</td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <button class="btn btn-primary mb-7" v-on:click="registro_ingreso()">
                            Ingresar datos
                        </button>



                    </div>
                </div> <!-- / .row -->
            </div>

        </div>
    </div>
</template>
    
<script>
import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import { BasicSelect } from 'vue-search-select';
import axios from 'axios';
import currency_formatter from 'currency-formatter';

export default {
    name: 'CreateIngresoApp',

    components: {
        Sidebar,
        TopNav,
        BasicSelect
    },

    data() {
        return {
            ingreso: {
                proveedor: '',
            },
            detalle: {
                id_variedad: ''
            },
            detalles: [],


            comprobante: undefined,
            producto: {},
            productos: [],
            variedades: [],
            total: 0,
        }
    },

    methods: {
        uploadComprobante($event) {

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
                this.ingreso.documento = '';
            }

            if (image.type == 'image/jpeg' || image.type == 'image/png' || image.type == 'image/webp' || image.type == 'image/jpg' || image.type == 'application/pdf') {
                this.comprobante = image;
                this.ingreso.documento = this.comprobante;
            } else {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'El archivo de a subir debe ser una imagen',
                    type: 'error'
                });
                this.ingreso.documento = ''
            }

            console.log(this.comprobante);
        },

        init_productos() {
            this.productos = [];
            axios.get(this.$url + '/producto/lista_producto_activo/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                for (var item of result.data) {
                    this.productos.push({
                        value: item.id,
                        text: item.titulo
                    })
                }

            }).catch((error) => {
                console.log(error);
            });
        },

        producto_selected(item) {
            this.producto = item;
            this.init_variedades(item.value);
            this.detalle.id_producto = item.value;
            this.detalle.titulo_producto = item.text;
        },

        init_variedades(id_producto) {
            axios.get(this.$url + '/variedad/' + id_producto, {
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

        agregar_detalle() {
            if (!this.detalle.id_producto) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Seleccione el producto',
                    type: 'error'
                });
            } else if (!this.detalle.id_variedad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Seleccione la variedad',
                    type: 'error'
                });
            } else if (!this.detalle.precio_unidad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el precio por unidad',
                    type: 'error'
                });
            } else if (!this.detalle.cantidad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingresar la cantidad a ingresar',
                    type: 'error'
                });
            } else {
                
                let newDetalle = {
                    "cantidad": parseInt(this.detalle.cantidad),
                    "precio_unidad": parseInt(this.detalle.precio_unidad),
                    "id_producto": this.detalle.id_producto,
                    "id_variedad": this.detalle.id_variedad,
                    "titulo_producto": this.detalle.titulo_producto,
                }

                this.detalles.push(newDetalle);
                

                let subTotal = this.detalle.precio_unidad * this.detalle.cantidad;
                this.total = this.total + subTotal;

                this.detalle = {
                    id_variedad: ''
                }
                this.producto = {};
                newDetalle = {};
            }
        },

        convertCurrency(number) {
            return currency_formatter.format(number, { code: 'USD' });
        },

        quitarDetalle(idx, subtotal) {
            this.total = this.total - subtotal;
            this.detalles.splice(idx, 1);
        },

        registro_ingreso() {
            if (!this.ingreso.proveedor) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Seleccione el proveedor',
                    type: 'error'
                });
            } else if (!this.ingreso.ncomprobante) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese N. De Comprobante',
                    type: 'error'
                });
            } else if (!this.ingreso.monto_total) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese Monto Total',
                    type: 'error'
                });
            } else if (!this.ingreso.documento) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el documento',
                    type: 'error'
                });
            } else {
                
                console.log(this.detalles);

                
                var fm = new FormData();
                fm.append('proveedor', this.ingreso.proveedor);
                fm.append('ncomprobante', this.ingreso.ncomprobante);
                fm.append('monto_total', this.ingreso.monto_total);
                fm.append('monto_resultante', this.total);
                fm.append('documento', this.ingreso.documento);
                fm.append('detalles', JSON.stringify(this.detalles));

                axios.post(this.$url + '/ingreso', fm, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': this.$store.state.token,
                    }
                }).then((result) => {
                    console.log(result);
                    this.$notify({
                        group: 'foo',
                        title: 'Exito',
                        text: 'Ingreso registrado con exito',
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
            }
        }
    },
    beforeMount() {
        this.init_productos();
    },
}
</script>
    