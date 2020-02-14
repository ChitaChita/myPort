<template>
<v-flex class="mb-4 xs12">
  <v-row justify="center" align-content="center">
    <v-col 
      v-for="(eco, i) in ecosystem" :key="i"
      cols=12 sm=10 md=8 lg=4 xl=2
    >
      <v-card
        class="mx-auto"
        style="background-color: beige; white-space: pre-line;"
        elevation="5"
      >
        <v-card-title class="text--primary justify-center font-weight-bold">
          <v-icon large color="secondary">{{ eco.icon }}</v-icon>
          {{eco.title}}
        </v-card-title>
        <v-spacer />
        <v-card-text>
          <div class="text--primary">
            {{ eco.text }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-flex>
</template>
<script>
export default {
  data: () => ({
    ecosystem: [
      {
        title: 'web開発スキル',
        text: 'HTML5, CSS3, JavaScript, Ruby, PHP',
        icon: 'mdi-file-code-outline',
      },
      {
        title: '学歴',
        text: '兵庫県 甲南大学理工学部生物学科 2006年卒業',
        icon: 'mdi-account-edit',
      },
      {
        title: '職歴',
        text: '営業,事務,警備員',
        icon: 'mdi-account-details',
      },
      {
        title: '名刺代わりの小説',
        text: '米澤穂信:犬はどこだ, 愚者のエンドロール \r\n北村薫:夜の蟬,六の宮の姫君 \r\n京極夏彦:塗仏の宴',
        icon: 'mdi-book-open-page-variant',
      },

    ],
    
  }),
};
</script>