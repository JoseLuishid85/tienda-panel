import  { jwtDecode }  from 'jwt-decode'

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store' 

import LoginApp from '../views/LoginApp.vue'
import DashboardApp from '../views/DashboardApp.vue'
import CreateColaboradorApp from '../views/colaboradores/CreateColaboradorApp.vue'
import IndexColaboradorApp  from '../views/colaboradores/IndexColaboradorApp.vue'
import EditColaboradorApp from '../views/colaboradores/EditColaboradorApp.vue'
import CreateProductoApp from '../views/productos/CreateProductoApp.vue'
import IndexProductoApp from '../views/productos/IndexProductoApp.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginApp, meta: { requiresAuth: false }  },
  { path: '/dashboard', name: 'dashboard', component: DashboardApp, meta: { requiresAuth: true }  },
  { path: '/colaborador/', name: 'colaborador-index', component: IndexColaboradorApp, meta: { requiresAuth: true }  },
  { path: '/colaborador/create', name: 'colaborador-create', component: CreateColaboradorApp, meta: { requiresAuth: true }  },
  { path: '/colaborador/edit/:id', name: 'colaborador-edit', component: EditColaboradorApp, meta: { requiresAuth: true }  },
  { path: '/about', name: 'about'  },

  { path: '/producto/', name: 'producto-index', component: IndexProductoApp, meta: { requiresAuth: true }  },
  { path: '/producto/create', name: 'producto-create', component: CreateProductoApp, meta: { requiresAuth: true }  },
  { path: '/producto/edit/:id', name: 'producto-edit', component: ()=> import('../views/productos/EditProductoApp.vue'), meta: { requiresAuth: true }  },
  { path: '/producto/galeria/:id', name: 'producto-galeria', component: ()=> import('../views/productos/GaleriaProductoApp.vue'), meta: { requiresAuth: true }  },

  { path: '/ingreso/create', name: 'ingreso-create', component: () => import('../views/ingreso/CreateIngresoApp.vue'), meta: { requiresAuth: true }  },
  
  
  { path: '/categoria', name: 'categoria', component: () => import('../views/categorias/IndexCategoriaApp.vue'), meta: { requiresAuth: true }  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  
  if(to.matched.some(item => item.meta.requiresAuth)){
    
    if(!store.state.token){
      next({
        name: 'login'
      })
    }

    try {
      jwtDecode(store.state.token)
    } catch (error) {
      next({
        name: 'login'
      })
    }

    if(jwtDecode(store.state.token).exp*1000 <= new Date().getTime()){
      next({
        name: 'login'
      })
    }

    next();

    }else{
    console.log('publica');
    next();
  }

  
})

export default router
