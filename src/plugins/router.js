import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/plugins/routes'

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
