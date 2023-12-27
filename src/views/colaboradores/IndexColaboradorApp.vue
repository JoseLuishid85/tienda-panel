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
                      Nuevo colaborador
                    </h1>

                  </div>
                </div> <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active">
                          Todos los colaboradores
                        </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/colaborador/create" class="nav-link">Nuevo colaborador</router-link>
                      </li>

                    </ul>

                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content">
              <div class="tab-pane fade show active" id="contactsListPane" role="tabpanel"
                aria-labelledby="contactsListTab">

                <!-- Card -->
                <div class="card"
                  data-list='{"valueNames": ["item-name", "item-title", "item-email", "item-phone", "item-score", "item-company"], "page": 10, "pagination": {"paginationClass": "list-pagination"}}'
                  id="contactsList">
                  <div class="card-header">
                    <div class="row align-items-center">
                      <div class="col">

                        <!-- Form -->
                        <form>
                          <div class="input-group input-group-flush input-group-merge input-group-reverse">
                            <input class="form-control list-search" v-model="filtro" @input="filtrar()" type="search"
                              placeholder="Buscar colaborador">
                            <span class="input-group-text">
                              <i class="fe fe-search"></i>
                            </span>
                          </div>
                        </form>

                      </div>

                      <div class="col-auto">

                        <!-- Dropdown 
                        <button class="btn btn-sm btn-white" v-on:click="filtrar()" type="button">
                          <i class="fe fe-sliders me-1"></i> Filter <span class="badge bg-primary ms-1 d-none">0</span>
                        </button>-->

                      </div>
                    </div> <!-- / .row -->
                  </div>
                  <div class="table-responsive">
                    <table class="table table-sm table-hover table-nowrap card-table">
                      <thead>
                        <tr>
                          <th>
                            <a class="list-sort text-muted">Nombres</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Cargo</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Email</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Estado</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Acciones</a>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="list fs-base">

                        <tr v-if="!load_data" v-for="item in colaboradores">

                          <td>

                            <!-- Avatar -->
                            <div class="avatar avatar-xs align-middle me-2">
                              <img class="avatar-img rounded-circle" src="/assets/img/avatar-1.jpg" alt="...">
                            </div>
                            <a class="item-name text-reset">{{ item.nombres }} {{ item.apellidos }}</a>

                          </td>
                          <td>

                            <!-- Text -->
                            <span class="item-title">{{ item.rol }} </span>

                          </td>
                          <td>

                            <!-- Email -->
                            <a class="item-email text-reset">{{ item.email }}</a>

                          </td>
                          <td>

                            <!-- Badge -->
                            <span v-if="item.estado" class="item-score badge bg-success-soft">Activo</span>
                            <span v-if="!item.estado" class="item-score badge bg-danger-soft">Desactivado</span>

                          </td>
                          <td class="text-end">

                            <!-- Dropdown -->
                            <div class="dropdown">
                              <a class="dropdown-ellipses dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fe fe-more-vertical"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <router-link class="dropdown-item" :to="{ name: 'colaborador-edit', params: { id: item._id || item.id } }" >
                                  Editar
                                </router-link>
                              </div>
                            </div>

                          </td>
                        </tr>

                        <tr v-if="load_data">
                          <td colspan="5" class="text-center">
                            <div class="spinner-border text-primary mt-5 mb-5" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </td>
                        </tr>


                      </tbody>
                    </table>
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
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import axios from 'axios';

export default {
  name: 'IndexColaboradorApp',

  data() {
    return {
      colaboradores: [],
      colaboradores_const: [],
      filtro: '',
      load_data: false,
    }
  },

  components: {
    Sidebar,
    TopNav
  },

  methods: {
    filtrar() {
      let term = new RegExp(this.filtro, 'i');
      
      this.colaboradores = this.colaboradores_const.filter(item =>
        term.test(item.nombres) ||
        term.test(item.apellidos) ||
        term.test(item.email)
      );

      //this.init_data();
    },
    init_data() {
      this.load_data = true;
      axios.get(this.$url+ '/usuario/lista_usuario_admin/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.$token,
        }
      }).then((result) => {
        console.log(result);
        
        
        this.load_data = false;
        this.colaboradores = result.data;
        this.colaboradores_const = result.data;
      }).catch((error) => {
        console.log(error);
      });

      console.log(this.$token);
    }
  },

  beforeMount() {
    this.init_data();
  },
}
</script>