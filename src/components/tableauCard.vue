<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <iframe class="tableau" v-bind="frameOptions" :src="permalink" />
    </v-card>
</template>

<script>
export default {
    name: 'tableauCard',
    props: {
        title: String,
        path: String,
        params: Object,
    },
    computed: {
        permalink() {
            return `https://public.tableau.com/views/${this.path}?`
                + Object.entries(this.parameters)
                    .map(([k,v])=>`%3A${k}=${v}`).join('&');
        }
    },
    data(){
        return {
            frameOptions: {
                frameborder: 0,
                allowtransparency: 'true',
                allowfullscreen: 'true',
                marginheight: 0,
                marginwidth: 0,
                scrolling: 'no',
            },
            parameters: Object.assign({
                display_static_image: 'y',
                bootstrapWhenNotified: 'true',
                embed: 'true',
                language: 'ko-KR',
                showVizHome: 'n',
                apiID: 'host0#navType=2',
                navSrc: 'Parse',
            }, this.params),
        }
    },
}
</script>
<style scoped>
iframe.tableau  {
    display: block;
    width: 100%;
    min-height: 50vh;
    overflow: auto;
    visibility: visible;
    margin: auto;
}
</style>