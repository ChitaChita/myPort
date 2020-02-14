<template>
<v-container class="fluid">
  <v-layout class="text-center wrap">
    <v-flex class="mb-4 xs12">
      <h1 class="display-2 font-weight-bold mb-3">
        About
      </h1>
      <h3 class="headline font-weight-bold mb-10">
        カンタンな履歴
      </h3>
    </v-flex>
    <v-spacer />
    <PersonalHistory />
  </v-layout>
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
