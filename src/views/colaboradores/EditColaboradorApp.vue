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
                                            Colaboradores
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Editar colaborador
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/colaborador/" class="nav-link">
                                                    Todos los colaboradores
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/colaborador/create/" class="nav-link">
                                                    Nuevo colaborador
                                                </router-link>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <template v-if="data">
                            <div>
                                <div class="row">
                                    <div class="col-12 col-md-6">

                                        <!-- First name -->
                                        <div class="form-group">

                                            <!-- Label -->
                                            <label class="form-label">
                                                Nombres
                                            </label>

                                            <!-- Input -->
                                            <input type="text" class="form-control" v-model="colaborador.nombres"
                                                placeholder="Nombre Completo">

                                        </div>

                                    </div>
                                    <div class="col-12 col-md-6">

                                        <!-- Last name -->
                                        <div class="form-group">

                                            <!-- Label -->
                                            <label class="form-label">
                                                Apellidos
                                            </label>

                                            <!-- Input -->
                                            <input type="text" class="form-control" v-model="colaborador.apellidos"
                                                placeholder="Apellido Completo">

                                        </div>

                                    </div>
                                    <div class="col-12">

                                        <!-- Email address -->
                                        <div class="form-group">

                                            <!-- Label -->
                                            <label class="mb-1">
                                                Correo electrónico
                                            </label>

                                            <!-- Form text -->
                                            <small class="form-text text-muted">
                                                This contact will be shown to others publicly, so choose it carefully.
                                            </small>

                                            <!-- Input -->
                                            <input type="email" class="form-control" v-model="colaborador.email"
                                                placeholder="Correo Electronico">

                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6">

                                        <!-- Birthday -->
                                        <div class="form-group">

                                            <!-- Label -->
                                            <label class="form-label">
                                                Cargo
                                            </label>

                                            <!-- Input -->
                                            <select name="" class="form-select" v-model="colaborador.rol">
                                                <option value="" disabled selected>Seleccionar</option>
                                                <option value="admin">Admin del Sistema</option>
                                                <option value="Administrador">Administrador</option>
                                                <option value="Vendedor">Vendedor</option>
                                                <option value="Inventariado">Inventariado</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>

                                <hr class="my-5">

                                <!-- Button -->
                                <button type="button" class="btn btn-primary" v-on:click="validar()">
                                    Guardar Cambios
                                </button>
                            </div>
                        </template>

                        <template v-if="!data">
                            <ErrorNotFound />
                        </template>




                        <br><br>

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
import ErrorNotFound from '@/components/ErrorNotFound.vue';
import store from '@/store';
import axios from 'axios';

export default {
    name: 'EditColaboradorApp',

    data() {
        return {
            colaborador: {
                rol: ''
            },
            id: this.$route.params.id,
            data: true,
        }
    },

    methods: {
        init_data() {
            axios.get(this.$url + '/usuario/usuario_admin/' + this.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.data = true;
                console.log(result);
                this.colaborador = result.data.usuario;

            }).catch((error) => {
                this.data = false;
                console.log(error)
            })
        },

        validar() {
            if (!this.colaborador.nombres) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agregar nombre',
                    type: 'error'
                });
            } else if (!this.colaborador.apellidos) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agregar apellido',
                    type: 'error'
                });
            } else if (!this.colaborador.email) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Agregar correo',
                    type: 'error'
                });
            } else if (!this.colaborador.rol) {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: 'Seleccione el rol',
                    type: 'error'
                });
            } else {
                this.actualizarColaborador();
            }
        },

        actualizarColaborador() {
            axios.put(this.$url + '/usuario/usuario_admin/' + this.id, this.colaborador, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                console.log(result)
                this.$notify({
                    group: 'foo',
                    title: 'Exito',
                    text: 'Se actualizo el colaborador',
                    type: 'success'
                });

                this.$router.push({ name: 'colaborador-index' })

            }).catch((error) => {
                this.$notify({
                    group: 'foo',
                    title: 'Error',
                    text: error.response.data.message,
                    type: 'error'
                });
                console.log(error);
            });
        }
    },

    mounted() {
        console.log(this.id);
    },

    beforeMount() {
        this.init_data();
    },

    components: {
        Sidebar,
        TopNav,
        ErrorNotFound
    }
}
</script>
  