import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Works from '@/views/Works.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/myPort',
    components: {
      default: Home,
      a: About,
      b: Works,
      c: Contact,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;