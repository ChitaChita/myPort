<template>
<v-container class="fluid">
  <v-layout class="text-center wrap">
    <v-flex class="mb-4">
      <h1 class="display-2 font-weight-bold mb-3">
        Contact
      </h1>
      <h3 class="headline font-weight-bold mb-3">連絡先</h3>
    </v-flex>
    <v-flex class="mb-4 xs12">
      <v-row style="height:200px;" justify="center" align-content="center">
        <v-col v-for="(eco, i) in ecosystem" :key="i" cols=12 sm=10 md=8 lg=4 xl=2>
          <v-card
            class="mx-auto"
            elevation="5"
            style="background-color: beige;"
            :href="eco.href"
            target="_blank"
            rel="noopener"
          >
            <v-card-title class="justify-center">
              <v-icon large color="secondary">{{ eco.icon }}</v-icon>
            </v-card-title>
            <v-card-text>
              <div class="text--primary">
                {{ eco.text }}
              </div>
            </v-card-text>
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