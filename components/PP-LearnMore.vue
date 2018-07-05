<template>
    <v-container class="align-content-space-between" fluid app>
        <v-flex>
        <div>
            <img class="element" src='~/assets/img/hedgehog_PNG18.png'/>
        </div>

        <div>
            <h3 class="display-3">HedgeHogs</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit libero esse odio excepturi fuga est ut itaque a quod suscipit, rerum asperiores.</p>
            <v-btn large color="pink accent-2 white--text" class="mx-0" nuxt to="/inspire">See more</v-btn>
        </div>      
        </v-flex>
    </v-container>
</template>

<style scoped>
img.element {
  float:left;
  width: 400px;
  margin: -2em 2em 2em 0;
  -webkit-shape-outside: ellipse(50%);
  shape-outside: ellipse(50%);
}
</style>

<script>
export default {
  data () {
    return {
      petInfos: [
        {
          title: 'Dog',
          float: 'left',
          image: require('~/assets/img/cute-3049614_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit libero esse odio excepturi fuga est ut itaque a quod suscipit, rerum asperiores.'
        },
        {
          title: 'Cat',
          float: 'right',
          image: require('~/assets/img/kitty-2948404_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit libero esse odio excepturi fuga est ut itaque a quod suscipit, rerum asperiores.'
        },
        {
          title: 'Bird',
          image: require('~/assets/img/budgie-2201255_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit libero esse odio excepturi fuga est ut itaque a quod suscipit, rerum asperiores.'
        },
        {
          title: 'Reptile',
          image: require('~/assets/img/snake-3017132_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit libero esse odio excepturi fuga est ut itaque a quod suscipit, rerum asperiores.'
        },
        {
          title: 'Small Pet',
          float: 'left',
          image: require('~/assets/img/hamster-2724477_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit libero esse odio excepturi fuga est ut itaque a quod suscipit, rerum asperiores.'
        },
        {
          title: 'Barnyard',
          image: require('~/assets/img/pot-bellied-pig-2961882_640.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit libero esse odio excepturi fuga est ut itaque a quod suscipit, rerum asperiores.'
        },
      ]
    }
  }
}
</script>