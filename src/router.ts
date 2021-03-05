
import {createWebHashHistory, createRouter} from 'vue-router'

import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import SwitchPage from './components/SwitchPage.vue';
import ButtonPage from './components/ButtonPage.vue';
import DialogPage from './components/DialogPage.vue';
import TabsPage from './components/TabsPage.vue';
import Intro from './components/Intro.vue';
import Install from './components/Install.vue';
import StartUse from './components/StartUse.vue';

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/doc', component: Doc,
     children: [
       {path: '', component:Intro},
       {path: 'intro', component: Intro},
       {path: 'install', component: Install},
       {path: 'start-use', component: StartUse},

       {path: 'switch', component: SwitchPage},
       {path: 'button', component: ButtonPage},
       {path: 'dialog', component: DialogPage},
       {path: 'tabs', component: TabsPage},
       
     ]}
  ]
});


export default router