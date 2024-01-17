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
                      Lista de Productos
                    </h1>

                  </div>
                </div> <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">

                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active">
                          Todos los Productos
                        </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/producto/create" class="nav-link">Nuevo Producto</router-link>
                      </li>

                    </ul>

                  </div>
                </div>
              </div>
            </div>


            <div class="row">
              <div class="col-12">

                <!-- Files -->
                <div class="card" data-list="{&quot;valueNames&quot;: [&quot;name&quot;]}">
                  
                  <div class="card-header">
                    <div class="input-group input-group-flush input-group-merge input-group-reverse">

                      <!-- Input -->
                      <input class="form-control list-search" type="search" placeholder="Busca tu producto"
                        v-model="filtro" @input="filtrar()">

                      <!-- Prepend -->
                      <div class="input-group-text" style="cursor: pointer;" v-on:click="init_data()">
                        <span class="fe fe-search"></span>
                      </div>

                    </div>

                  </div>

                  <div class="card-body">

                    <template v-if="load_data">
                      <div>
                        <div class="row">
                          <div class="col-12 text-center">
                            <div class="spinner-border text-primary mt-5 mb-5" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </template>
                    <template v-if="!load_data">
                      <div>
                        <ul id="my-table" class="list-group list-group-lg list-group-flush list my-n4" v-if="productos.length >= 1">

                          <li class="list-group-item" v-for="item in itemsForList">
                            <div class="row align-items-center">
                              <div class="col-auto">

                                <!-- Avatar -->
                                <a href="#!" class="avatar avatar-lg">
                                  <img :src="$url + '/producto/obtener_image_producto/' + item.portada" alt="..."
                                    class="avatar-img rounded">
                                </a>

                              </div>
                              <div class="col ms-n2">

                                <!-- Title -->
                                <h4 class="mb-1 name">
                                  <a href="#!">{{ item.titulo }}</a>
                                </h4>

                                <!-- Text -->
                                <p class="card-text small text-muted mb-1">
                                  {{ item.categoria }} &nbsp;
                                  <span v-if="!item.estado" class="item-score badge bg-danger-soft">Borrador</span>
                                  <span v-if="item.estado" class="item-score badge bg-success-soft">Publicado</span>
                                </p>

                                <!-- Time >-->
                                <p class="card-text small text-muted">
                                  Creación <time datetime="2018-01-03">{{ convertDate(item.createdAt) }}</time>
                                </p>

                              </div>
                              <div class="col-auto">

                                <span><b>{{ convertCurrency(item.precio) }}</b></span>

                              </div>
                              <div class="col-auto">

                                <!-- Dropdown -->
                                <div class="dropdown">
                                  <a href="#" class="dropdown-ellipses dropdown-toggle" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fe fe-more-vertical"></i>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    
                                    <router-link :to="{ name: 'producto-edit', params: { id: item.id  } }" class="dropdown-item">
                                      Editar Producto
                                    </router-link>
                                  </div>
                                </div>

                              </div>
                            </div> <!-- / .row -->
                          </li>
                        </ul>

                        <div class="row justify-content-center" v-if="productos.length == 0">
                          <div class="col-12 col-md-6 col-xl-6 my-5">

                            <div class="text-center">

                              <h1 class="display-4 mb-3">
                                No se encuentra registro
                              </h1>

                            </div>

                          </div>
                        </div>
                      </div>
                    </template>


                  </div>

                  <div class="card-footer">
                    <b-pagination 
                      v-model="currentPage" 
                      :total-rows="productos.length" 
                      :per-page="perPage"
                      aria-controls="my-table">
                    </b-pagination>
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
import moment from 'moment';
import currency_formatter from 'currency-formatter';

export default {
  name: 'IndexProductoApp',

  data() {
    return {
      productos: [],
      productos_const: [],
      filtro: '',
      load_data: false,
      currentPage: 1,
      perPage: 10,
      get itemsForList(){
        return this.productos.slice(
          (this.currentPage-1) * this.perPage, this.currentPage * this.perPage
        )
      }
    }
  },

  methods: {
    filtrar() {
      let term = new RegExp(this.filtro, 'i');

      this.productos = this.productos_const.filter(item =>
        term.test(item.titulo) ||
        term.test(item.categoria)
      );

      //this.init_data();
    },
    init_data() {
      this.load_data = true;
      axios.get(this.$url + '/producto/buscar/' + this.filtro, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.$store.state.token,
        }
      }).then((result) => {
        this.load_data = false;
        this.productos = result.data;
        this.productos_const = result.data;

      }).catch((error) => {
        console.log(error);
      });
    },

    convertDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },

    convertCurrency(number) {
      return currency_formatter.format(number, { code: 'EUR' }); //USD
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
    