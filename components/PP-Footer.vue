<template>
  <v-footer app
            class="dark--text d-inline-block"
            :inset="$options.footer_inset"
             >

    <v-card flat tile class="flex" color="green darken-1">
      <v-card-text>
        <v-layout >
          <v-flex
            v-for="(col, cr) in rows"
            :key="cr"
            style="margin: 0 auto"
            xs2
          >
            <span class="body-2" v-text="col.title.toUpperCase()"></span>
            <div
              v-for="(child, colChild) in col.children"
              :key="colChild"
              v-text="child"
            ></div>
            <v-btn
              v-for="(icon, colIcons) in col.icons"
              :key="colIcons"
              icon
              dark
              class="mx-2 orange lighten-1"
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs3 layout column>
            <span class="body-2">CONTACT</span>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
              New York, NY 10012, US
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
              info@example.com
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
              + 01 234 567 88
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
              + 01 234 567 89
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
  .v-footer--fixed {
    position: absolute;
  }
</style>


<script>
  export default {
    footer_inset: true,
    data: () => ({
      rows: [
        {
          title: 'Company Name',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit'],
          icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-instagram']
        },
        {
          title: 'Products',
          children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
        },
        {
          title: 'Useful Links',
          children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
        }
      ]
    })
  }
</script>
