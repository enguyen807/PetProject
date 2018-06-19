<template>
  <div app>
    <v-jumbotron 
      :src="require('~/assets/img/hedgehog-468228_1920.jpg')"
      :gradient="gradient"    
      dark
      app>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Welcome to the site</h3>
            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Check out our newest features!</div>
            <v-btn large color="pink accent-2" class="mx-0" nuxt to="/inspire">See more</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-container fluid style="padding-left: 0px; padding-right: 0px" app>
      <v-layout row wrap>
        <v-flex v-for="pets in petInfos" :key="pets.title" xs12 sm12 md12 lg4 xl4>
          <v-card target="_blank" :href="url" height="200px" class="elevation-6">
            <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex d-flex xs6>
                  <v-card-title>
                    <div>
                      <div class="headline">{{pets.title}}</div>
                      <div class="subheading">{{pets.description}}</div>
                    </div>
                    <v-card-actions>
                      <v-btn class="orange lighten-1">Learn More</v-btn>
                    </v-card-actions>
                  </v-card-title>
                </v-flex>
                <v-flex d-flex xs6 >
                  <v-card-media
                    :src="pets.image"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="padding-left: 0px; padding-right: 0px; margin-bottom: 100px;" app>
      <v-layout row wrap>
        <v-flex v-for="pets in petInfos" :key="pets.title" xs12 sm12 md12 lg4 xl4>
          <v-card target="_blank" :href="url" height="200px" class="elevation-6">
            <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex d-flex xs6>
                  <v-card-title>
                    <div>
                      <div class="headline">{{pets.title}}</div>
                      <div class="subheading">{{pets.description}}</div>
                    </div>
                    <v-card-actions>
                      <v-btn class="orange lighten-1">Learn More</v-btn>
                    </v-card-actions>
                  </v-card-title>
                </v-flex>
                <v-flex d-flex xs6 >
                  <v-card-media
                    :src="pets.image"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<style scoped>
.card {
  margin: 0px 10px 20px 10px;
  padding: 10px;
}
</style>


<script>
export default {
  data () {
    return {
      gradient: 'to top right, rgba(0, 0, 0, 0.8), rgba(128, 128, 128, .6)',
      petInfos: [
        {
          title: 'Dog',
          image: require('~/assets/img/cute-3049614_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Cat',
          image: require('~/assets/img/kitty-2948404_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Bird',
          image: require('~/assets/img/budgie-2201255_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Reptile',
          image: require('~/assets/img/snake-3017132_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Small Pet',
          image: require('~/assets/img/hamster-2724477_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          title: 'Barnyard',
          image: require('~/assets/img/pot-bellied-pig-2961882_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
      ]
    }
  }
}
</script>
