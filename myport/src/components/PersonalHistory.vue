<template>
  <v-container fluid>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <v-row style="height:450px;" justify="center" align-content="center">
          <v-col cols=12 sm=10 md=8 lg=4 xl=3>
            <v-card
              height=130
              outlined
              style="background-color: beige;"
              tile
              v-for="(eco, i) in ecosystem"
              :key="i"
              :href="eco.href"
              target="_blank"
            >
              <v-card-title primary-title class="justify-center">
                <v-icon>{{ eco.icon }}</v-icon>
                {{eco.title}}
              </v-card-title>
              {{ eco.text }} <br>
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
        title: '学歴',
        text: '兵庫県 甲南大学理工学部生物学科 2006年卒業',
        icon: 'mdi-account-edit',
      },
      {
        title: '職歴',
        text: '営業、事務',
        icon: 'mdi-account-details',
      },
      {
        title: 'web開発スキル',
        text: 'HTML5, CSS3, JavaScript, Ruby, PHP',
        icon: 'mdi-file-code-outline',
      },
      // {
      //   text: '学習中スキル',
      //   href: 'https://honda-survey.herokuapp.com',
      //   icon: 'mdi-language-ruby-on-rails',
      //   note: 'Ruby on rails + Chart.js',
      // },
    ],
    
  }),
};
</script>