<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      class="grey lighten-2"
      mobile-break-point="1080px"
      :clipped="$options.drawer_clipped"
      :fixed="$options.drawer_fixed"
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="green darken-1"
      :fixed="$options.toolbar_fixed"
      clipped-left
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="$options.title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="$options.footer_fixed"
      :inset="$options.footer_inset"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    title: 'Vuetify.js',
    footer_inset: true,
    drawer_fixed: true,
    toolbar_fixed: true,
    footer_fixed: true,
    drawer_clipped: true,
    data() {
      return {
        drawer: true,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],

      }
    }
  }
</script>
