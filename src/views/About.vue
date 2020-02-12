<template>
<v-container fluid>
  <v-layout text-center wrap>
    <v-flex mb-4>
      <h1 class="display-2 font-weight-bold mb-3">
        About
      </h1>
    <h3 class="headline font-weight-bold mb-3">カンタンな履歴</h3>
    </v-flex>

  </v-layout>
  <PersonalHistory />
</v-container>
</template>

<script>
import PersonalHistory from '@/components/PersonalHistory';

export default {
  components: {
    PersonalHistory,
  },
  data: () => ({
    //
  }),
};
</script>
