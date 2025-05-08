import { createApp } from 'vue'
import App from '../App.vue'
import BookDetails from '../src/components/BookDetails.vue'
    import { createRouter, createWebHistory } from "vue-router"
    const routeInfos = [
        {
            path : "/",
            component : App
        },
        {
            path : "/BookDetails",
            component : BookDetails
        }
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;