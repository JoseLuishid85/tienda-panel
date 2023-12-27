import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import CreateColaboradorApp from '../views/colaboradores/CreateColaboradorApp.vue'
import IndexColaboradorApp  from '../views/colaboradores/IndexColaboradorApp.vue'
import EditColaboradorApp from '../views/colaboradores/EditColaboradorApp.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginApp  },
  { path: '/colaborador/index', name: 'colaborador-index', component: IndexColaboradorApp  },
  { path: '/colaborador/create', name: 'colaborador-create', component: CreateColaboradorApp  },
  { path: '/colaborador/edit/:id', name: 'colaborador-edit', component: EditColaboradorApp  },
  { path: '/about', name: 'about'  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
