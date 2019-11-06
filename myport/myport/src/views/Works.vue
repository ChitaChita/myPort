<template>
  <v-container fluid>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Works
        </h1>
      </v-flex>
      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">Used  Flameworks  My  Products</h2>
      </v-flex>
    </v-layout>
    <v-layout
      text-center
    >
      <v-flex>
        <v-card
          class="pa-2"
          outlined
          style="background-color: beige;"
          tile
          v-for="(eco, i) in ecosystem"
          :key="i"
          :href="eco.href"
          target="_blank"
        >
          {{ eco.text }} <br>
          <v-icon>{{ eco.icon }}</v-icon><br>
          {{ eco.note }}
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: '1.vue-slot-app',
        href: 'https://chitachita.github.io/vue-slot-app/#/',
        icon: 'mdi-vuejs',
        note: 'Vue.js + Vuex + Vuerouter',
      },
      {
        text: '2.honda-survey',
        href: 'https://honda-survey.herokuapp.com',
        icon: 'mdi-language-ruby-on-rails',
        note: 'Ruby on rails + Chart.js',
      },
    ],
    
  }),
};
</script>