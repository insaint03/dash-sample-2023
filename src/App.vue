<template>
  <v-app id="application">
    <!-- 
    <v-app-bar :elevation="1">

    </v-app-bar>
    -->
    <v-navigation-drawer permanent theme="dark">
      <v-list>
        <v-list-subheader>Dashboards Sample</v-list-subheader>
        <v-list-item v-for="(rt, ri) in routes" :key="`route-list-${ri}`"
          @click="active=ri">
          <v-list-item-title>{{ rt.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main app>
      <v-container>
        <v-row>
          <v-col v-for="(d, di) in activated.dashboards" :key="`dashboard-${active}.${di}`"
            :cols="d.cols || 6">
            <tableau-card v-if="d.type === 'tableau'" v-bind="d" />
            <container-card v-else v-bind="d" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- navigation drawer control (right) -->
    <v-navigation-drawer app location="right">

    </v-navigation-drawer>
  </v-app>
</template>

<script>
import routes from '@/plugins/routes'
import tableauCard from '@/components/tableauCard'
import containerCard from '@/components/containerCard.vue'

export default {
  name: 'App',
  components: {
    tableauCard,
    containerCard,
  },
  computed: {
    activated() {
      return this.routes[this.active];
    }
  },
  data() {
    return {
      active: 0,
      routes,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
