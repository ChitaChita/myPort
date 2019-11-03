<template>
  <v-container>
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
        <h2 class="headline font-weight-bold mb-3">Used Flameworks 1.vue.js 2.ruby on rails</h2>


        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
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
      },
      {
        text: '2.honda-survey',
        href: 'https://honda-survey.herokuapp.com',
      },
    ],
    
  }),
};
</script>