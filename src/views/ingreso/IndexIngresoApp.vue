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
                                            <b>Ingresos</b>
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/ingreso" class="nav-link active">
                                                    Ingresos
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/ingreso/create" class="nav-link">Nuevo
                                                    Ingreso</router-link>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col-9 d-flex">
                                <input type="date" class="form-control" style="margin-right: 1rem" />
                                <input type="date" class="form-control" />
                            </div>
                            <div class="col">
                                <button class="btn btn-primary" style="width:100%">Buscar</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">

                                <!-- Title -->
                                <h4 class="card-header-title mb-0">
                                    <b>Ingreso a inventario</b>
                                </h4>

                            </div>
                            <div class="table-responsive">
                                <table class="table table-sm table-nowrap card-table">
                                    <thead>
                                        <tr>
                                            <th>Proveedor</th>
                                            <th>Serie</th>
                                            <th>Monto</th>
                                            <th>Documento</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-base" v-if="ingreso.length > 0">
                                        <tr v-for="item in ingreso">
                                            <td>
                                                <a>{{ item.proveedor }}</a>
                                            </td>
                                            <td>
                                                <a>#{{ item.serie.toString().padStart(6, '000000') }}</a>
                                            </td>
                                            <td>
                                                {{ convertCurrency(item.monto_resultante) }}
                                            </td>
                                            <td>
                                                <a :href="$url + '/documento/' + item.documento" target="_blank">
                                                    <span class="badge bg-success">Abrir documento</span>
                                                </a>
                                            </td>
                                            <td>
                                                <router-link class="btn btn-primary text-white"  :to="{ name: 'ingreso-detalle',params: {id: item.id} }" >Ver</router-link>
                                            </td>
                                        </tr>
                                    </tbody>

                                    <tbody v-if="ingreso.length == 0">
                                        <tr>
                                            <td colspan="4">
                                                <div class="row justify-content-center">
                                                    <div class="col-12 col-md-6 col-xl-6 my-5">

                                                        <div class="text-center">

                                                            <!-- Preheading -->
                                                            <h6 class="text-uppercase text-muted mb-4">
                                                                404 error
                                                            </h6>

                                                            <!-- Heading -->
                                                            <h1 class="display-4 mb-3">
                                                                No se encontraron registros 😭
                                                            </h1>

                                                            <!-- Subheading -->
                                                            <p class="text-muted mb-4">
                                                                No hay datos que mostrar!
                                                            </p>



                                                        </div>

                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                    </div>
                </div> <!-- / .row -->
            </div>


        </div>

    </div>
</template>

<script>
// @ is an alias to /src

import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import axios from 'axios';
import currency_formatter from 'currency-formatter';


export default {
    name: 'IndexIngresoApp',
    components: {
        Sidebar,
        TopNav
    },
    data() {
        return {
            ingreso: []
        }
    },
    methods: {
        init_ingresos() {
            axios.get(this.$url + '/ingreso', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                console.log(result.data);
                this.ingreso = result.data;

            }).catch((error) => {
                console.log(error);
            });
        },
        convertCurrency(number) {
            return currency_formatter.format(number, { code: 'USD' });
        }
    },
    beforeMount() {
        this.init_ingresos();
    },
}
</script>