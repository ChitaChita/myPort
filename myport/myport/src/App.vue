<template>
  <v-app class="app">
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Menu</span>
        <span class="font-weight-light">SOMETHING</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        to="/"
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn
        text
        to="/about"
      >
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn
        text
        to="/works"
      >
        <span class="mr-2">Works</span>
      </v-btn>
      <v-btn
        text
        to="/contact"
      >
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>