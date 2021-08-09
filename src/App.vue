<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        iOS接触通知ログ解析ツール
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ExposeChecker/>
    </v-main>
  </v-app>
</template>

<script>
import ExposeChecker from './components/ExposeChecker';

export default {
  name: 'App',

  components: {
    ExposeChecker,
  },

  data: () => ({
    //
  }),
};
</script>
