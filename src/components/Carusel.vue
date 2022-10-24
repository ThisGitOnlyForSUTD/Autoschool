<template>
  <v-carousel :show-arrows="true" hide-delimiters id="carusel">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/img/carusel/3.jpg'),
          },
          {
            src: require('../assets/img/carusel/4.jpg'),
          },
          {
            src: require('../assets/img/carusel/5.jpg'),
          },
          {
            src: require('../assets/img/carusel/6.jpg'),
          },  {
            src: require('../assets/img/carusel/7.jpg'),
          },  {
            src: require('../assets/img/carusel/8.jpg'),
          },
        ],
      }
    },
  }
</script>