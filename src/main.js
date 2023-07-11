import { createApp } from 'vue'
import App from '@/App.vue'

import vuetify from '@/plugins/vuetify'
import vuerouter from '@/plugins/router'
import routes from '@/plugins/routes'


createApp(App)
    .use(vuetify)
    .use(vuerouter)
    .use(routes)
    .mount('#app')
