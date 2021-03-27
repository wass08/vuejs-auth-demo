import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  { 
    name: 'login',
    path: '/', 
    component: Login,
  },
  { 
    name: 'profile',
    path: '/profile', 
    component: Profile, 
    props:true 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;