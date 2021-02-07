
import {createWebHashHistory, createRouter} from 'vue-router'

import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import SwitchPage from './components/SwitchPage.vue';

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/doc', component: Doc,
     children: [
       {path: 'switch', component: SwitchPage},
     ]}
  ]
});


export default router