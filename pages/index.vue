<template>
    <v-jumbotron
      :src="require('~/assets/img/logo.png')"
      :gradient="gradient"
      dark>
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
</template>

<script>
const imgUrl = require('~/assets/img/logo.png')
export default {
  data () {
    return {
      gradient: 'to top right, black, gray 80%',
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
