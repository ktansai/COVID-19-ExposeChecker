<template>
  <v-app>
    <v-app-bar
      app
      color="deep-orange lighten-2"
      dark
    >
      <div v-if="!$vuetify.breakpoint.xs">
        COCOAログチェッカー
      </div>
      

      <v-spacer></v-spacer>
      <div class="d-flex align-center">
      <v-btn
        @click="dialog=true"
        text
        small
      >
      
      <v-icon>
        mdi-plus-box-outline
      </v-icon>
        <span>
        ホーム画面に追加
        </span>
      </v-btn>
      </div>

      <!-- <v-btn
        href="https://github.com/ktansai/COVID-19-ExposeChecker"
        target="_blank"
        text
      >
        <span class="mr-2">github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 lighten-2">
          ホーム画面に追加
        </v-card-title>

        <v-card-text>

          ブラウザの下記ボタンを押して<b>ホーム画面に追加</b>を押すと、ホーム画面上にショートカットを作成できます。<br>
          ショートカットを作成し、定期的にログを解析することをおすすめします。<br><br>
          <v-row>
          <v-col cols=6>
          <v-img src="@/assets/images/add-home-ios.png"/>
          </v-col>
          <v-col cols=6>
          <v-img src="@/assets/images/add-home-android.png"/>
          </v-col>
          </v-row>
          <p class="text-center">
          (左:iOS / 右:Android)<br><br>
          </p>
          <v-img class="mx-8" src="@/assets/images/home-icon.png"/>


        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    dialog: true
    //
  }),
};
</script>
