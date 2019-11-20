<template>
<v-container
  fluid
  fill-height
  class="grey lighten-5"
>
  <v-layout text-center wrap>
    <v-flex mb-4 xs12>
      <h1 class="display-2 font-weight-bold mb-3">
        Works
      </h1>
      <h3 class="headline font-weight-bold mb-3">制作物一覧</h3>
    </v-flex>
    <v-flex>
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
            {{i+1}}.{{ eco.text }} <br>
            <v-icon>{{ eco.icon1 }}</v-icon>
            <v-icon>{{ eco.icon2 }}</v-icon><br>
            {{ eco.note }}<br>
            URL: {{ eco.link }}
          </v-card>
          <v-spacer></v-spacer>
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
        text: 'vue-slot-app (個人制作)',
        href: 'https://chitachita.github.io/vue-slot-app/#/',
        icon1: 'mdi-vuejs',
        icon2: '',
        note: 'Vue.jsにてVuerouter,Vuexを使用した簡単なゲームアプリ 個人制作',
        link: 'https://chitachita.github.io/vue-slot-app/#/',
      },
      {
        text: 'honda-survey (個人制作)',
        href: 'https://honda-survey.herokuapp.com',
        icon1: 'mdi-language-ruby-on-rails',
        icon2: '',
        note: 'Ruby on rails を使用、アンケートの結果をChart.jsにて表示するアプリ',
        link: 'https://honda-survey.herokuapp.com',
      },
      {
        text: 'Life_log (チーム制作)',
        href: '#',
        icon1: 'mdi-language-ruby-on-rails',
        icon2: 'mdi-vuejs',
        note: 'Ruby on railsとVue.jsを使用し、日常の記録を管理、分析をするアプリ',
        link: 'in preparation',
      },
    ],
    
  }),
};
</script>