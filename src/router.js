
import {createRouter, createWebHistory} from 'vue-router';

import FullSection from './components/fullSections.vue'
import singlePage from '../src/components/singlePage/singlePage.vue'



const routes = [
    { path: '/' , component: FullSection},
    { path: '/content/:id', component: singlePage, name:'content' },
    
]


const router = createRouter({
    history : createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            x : 0,
            y : 0
        };
        
    }
});

export default router;
