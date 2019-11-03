<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Menu</span>
        <span class="font-weight-light">SOMETHING</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/"
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn
        flat
        to="/about"
      >
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>