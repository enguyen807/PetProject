<template>
  <v-layout align-start justify-space-around fill-height>
    <v-flex xs12 lg5 mb-3> 
        <v-card xs12 md6 lg3>
            <v-layout wrap>
                <v-flex
                v-for="card in cards"
                v-bind="{ [`xs${card.flex}`]: true }"
                :key="card.title"
                >
                <v-card>
                    <v-card-media
                    :src="card.src"
                    height="200px"
                    >
                    <v-container
                        fill-height
                        fluid
                        pa-2
                    >
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>
                        </v-layout>
                    </v-container>
                    </v-card-media>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>share</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-flex>   
    <v-flex xs12 lg5 mb-3>
        <v-expansion-panel focusable>
            <v-expansion-panel-content
            v-for="(item,i) in 5"
            :key="i"
            >
            <div slot="header">Item</div>
            <v-card>
                <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>  
    </v-flex>    
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
      ]
    })
  }
</script>