<template>
  <v-app class="app">
    <!-- ハンバーガーメニュー -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item to="/" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about" link>
          <v-list-item-action>
            <v-icon> mdi-account-card-details-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ABOUT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/works" link>
          <v-list-item-action>
            <v-icon>mdi-tools</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>WORKS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contact" link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>CONTACT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- トップメニュー -->
    <v-app-bar color="primary" light app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title 
      class="headline 
      text-uppercase">
        <span>Menu</span>
        <span class="font-weight-light"> ICONS</span>
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
    <v-footer color="secondary" light app>
      Chita's
    </v-footer>
  </v-app>
</template>
<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      // ハンバーガーメニュー
      drawer: null,
    }),
  }
</script>