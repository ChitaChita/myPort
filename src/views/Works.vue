<template>
<v-container fluid>
  <v-layout text-center wrap>
    <v-flex mb-4 xs12>
      <h1 class="display-2 font-weight-bold mb-3">
        Works
      </h1>
      <h3 class="headline font-weight-bold mb-3">制作物一覧</h3>
    </v-flex>
    <v-spacer />
    <v-flex>
      <v-row justify="center" align-content="center">
        <v-col 
        v-for="(eco, i) in ecosystem"
            :key="i"
        cols=12 sm=10 md=8 lg=4 xl=3>
          <v-card
            :href="eco.href"
            class="works"
            elevation="3"
            style="background-color: beige; white-space: pre-line;"
            target="_blank"
          >
            <v-card-title primary-title class="justify-center">
              <v-icon>{{ eco.icon1 }}</v-icon>
              <v-icon>{{ eco.icon2 }}</v-icon>
              {{i+1}}.{{ eco.text }}
            </v-card-title>
            {{ eco.note }}<br>
            URL: {{ eco.link }}
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
        text: 'vue-slot-app (個人制作)',
        href: 'https://chitachita.github.io/vue-slot-app/#/',
        icon1: 'mdi-vuejs',
        icon2: '',
        note: 'Vue.jsにてVuerouter,\r\nVuexを使用した簡単なゲームアプリ',
        link: 'https://chitachita.github.io/vue-slot-app/#/',
      },
      {
        text: 'honda-survey (個人制作)',
        href: 'https://honda-survey.herokuapp.com',
        icon1: 'mdi-language-ruby-on-rails',
        icon2: '',
        note: 'Ruby on rails を使用、\r\nアンケートの結果をChart.jsにて表示するアプリ',
        link: 'https://honda-survey.herokuapp.com',
      },
      {
        text: 'Life_log (チーム制作)',
        href: '',
        icon1: 'mdi-language-ruby-on-rails',
        icon2: 'mdi-vuejs',
        note: 'Ruby on railsとVue.jsを使用し、\r\n日常の記録を管理、分析をするアプリ',
        link: '準備中',
      },
    ],
    
  }),
};
</script>