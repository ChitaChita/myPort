<template>
<v-app class="app">
  <!-- ハンバーガーメニュー -->
  <v-navigation-drawer
    v-model="drawer"
    app
    absolute
    temporary
  >
    <v-list dense>
      <v-list-item to="/myPort" link>
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
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        class="hidden-sm-and-down"
        text
        to="/myPort"
      >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        to="/about"
      >
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        to="/works"
      >
        <span class="mr-2">Works</span>
      </v-btn>
      <v-btn
        class="hidden-sm-and-down"
        text
        to="/contact"
      >
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <!-- メインコンテンツ -->
  <v-content transition="slide-x-transition">
    <router-view />
  </v-content>
  <!-- フッター部分 -->
  <v-footer color="secondary" light app>
    <div class="flex-grow-1"></div>
    <div>&copy; 2019 - {{ new Date().getFullYear() }} written by Chita</div>
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