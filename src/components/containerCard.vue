<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-toolbar-title>
                <a target="_newtab" :href="path">
                    {{ title }}
                </a>
            </v-toolbar-title>
        </v-toolbar>
        <iframe class="container" v-bind="params" :src="path" />
    </v-card>
</template>

<script>
export default {
    name: 'containerCard',
    props: {
        title: String,
        path: String,
        params: Object
    },
    data(){
        
        return {
        }
    },
}
</script>
<style scoped>
iframe.container  {
    display: block;
    width: 100%;
    min-height: 50vh;
    overflow: auto;
    visibility: visible;
    margin: auto;
}
</style>