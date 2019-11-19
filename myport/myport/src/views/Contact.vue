<template>
  <v-container fluid>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Contact
        </h1>
      </v-flex>
      <v-flex mb-5 xs12>
        <v-row style="height:200px;" justify="center" align-content="center">
          <v-col cols=12 sm=10 md=8 lg=4 xl=3>
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
              <v-icon>{{ eco.icon }}</v-icon>
              {{ eco.text }}
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    ecosystem: [
      {
        text: 'https://github.com/ChitaChita',
        href: 'https://github.com/ChitaChita',
        icon: 'mdi-github-box',
      },
    ],
    
  }),
};
</script>